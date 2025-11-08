import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js"

// function for add product
const addProduct = async (req, res) => {
    try {

        const { name, description, price, category, subCategory, sizes, bestseller } = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save()

        res.json({ success: true, message: "Product Added" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for list product
const listProducts = async (req, res) => {
    try {
        
        const products = await productModel.find({});
        res.json({success:true,products})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for removing product
const removeProduct = async (req, res) => {
    try {
        
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for single product info
const singleProduct = async (req, res) => {
    try {
        
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const singleProductGet = async (req, res) => {
  try {
    const { id } = req.params
    const product = await productModel.findById(id)
    if (!product) return res.json({ success: false, message: 'Not found' })
    res.json({ success: true, product })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// POST /api/product/update (multipart/form-data)
const updateProduct = async (req, res) => {
  try {
    const {
      id,
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body

    const prod = await productModel.findById(id)
    if (!prod) return res.json({ success: false, message: 'Product not found' })

    // Start with existing image URLs
    const urls = Array.isArray(prod.image) ? [...prod.image] : []

    // Helper to upload/replace at position
    const maybeUpload = async (field, index) => {
      const f = req.files?.[field]?.[0]
      if (!f) return
      const up = await cloudinary.uploader.upload(f.path, { resource_type: 'image' })
      urls[index] = up.secure_url   // replace that slot
    }

    await maybeUpload('image1', 0)
    await maybeUpload('image2', 1)
    await maybeUpload('image3', 2)
    await maybeUpload('image4', 3)

    // Parse types safely
    const parsedSizes = Array.isArray(sizes) ? sizes : JSON.parse(sizes || '[]')
    const parsedBest = (bestseller === 'true' || bestseller === true)

    // Apply field updates
    prod.name = name
    prod.description = description
    prod.category = category
    prod.subCategory = subCategory
    prod.price = Number(price)
    prod.sizes = parsedSizes
    prod.bestseller = parsedBest
    prod.image = urls

    await prod.save()
    res.json({ success: true, message: 'Product Updated' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct,
  singleProductGet,
  updateProduct,
}