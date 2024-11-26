import { useState } from "react"
import { assets } from "../assets/assets"
import axios from "axios"
import { backendUrl } from "../App"
const Add = ({token}) => {
    const [image1,setImage1] = useState(false)
    const [image2,setImage2] = useState(false)
    const [image3,setImage3] = useState(false)
    const [image4,setImage4] = useState(false)

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('Men');
    const [subCategory,setSubCategory] = useState('Topwear');
    const  [bestseller,setBestseller] = useState(false);
    const [sizes,setSizes] = useState([]);

    const onSubmitHandler = async(e)=>{
    e.preventDefault()
    try {
        const formData = new FormData() 
        formData.append('name',name)
        formData.append('description',description)
        formData.append('price',price)
        formData.append('category',category)
        formData.append('subCategory',subCategory)
        formData.append('bestseller',bestseller)
        formData.append('sizes',JSON.stringify(sizes))

        image1 && formData.append('image1',image1)
        image2 && formData.append('image2',image2)
        image3 && formData.append('image3',image3)
        image4 && formData.append('image4',image4)

        const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
    }
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
        <div>
            <p className="mb-2 text-white">Upload Image</p>

            <div className="flex gap-2">
                <label htmlFor="image1">
                    <img className="w-20" src={!image1?  assets.upload_area: URL.createObjectURL(image1)} alt="" />
                    <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden/>
                </label>
                <label htmlFor="image2">
                    <img className="w-20" src={!image2?  assets.upload_area: URL.createObjectURL(image2)} alt="" />
                    <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
                </label>
                <label htmlFor="image3">
                    <img className="w-20" src={!image3?  assets.upload_area: URL.createObjectURL(image3)} alt="" />
                    <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
                </label>
                <label htmlFor="image4">
                    <img className="w-20" src={!image4?  assets.upload_area: URL.createObjectURL(image4)} alt="" />
                    <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
                </label>
            </div>
        </div>
        <div className="w-full">
            <p className="text-white mb-2">Product Name</p>
            <input onChange={(e)=>setName(e.target.value)} value={name} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Type Here" required />
        </div>
        <div className="w-full">
            <p className="text-white mb-2">Product Description</p>
            <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Give Description" required />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
            <div>
                <p className="text-white mb-2">Product Category</p>
                <select onChange={(e)=>setCategory(e.target.value)} className="w-full px-3 py-2 ">
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>
            </div>
            <div>
                <p className="text-white mb-2">Sub Category</p>
                <select  onChange={(e)=>setSubCategory(e.target.value)} className="w-full px-3 py-2 ">
                    <option value="Topwear">Topwear</option>
                    <option value="Bottomwear">Bottomwear</option>
                    <option value="Winterwear">Winterwear</option>
                </select>
            </div>
            <div>
                <p className="mb-2 text-white ">Price</p>
                <input  onChange={(e)=>setPrice(e.target.value)} value={price} className="w-full px-3 py-2 sm:w-[120px]" type="number" placeholder="Enter Price" required />
            </div>
        </div>

        <div>
            <p className="mb-2">Product Sizes</p>
            <div className="flex gap-3">
                <div onClick={()=> setSizes(prev => prev.includes('S')? prev.filter(item => item !== 'S'): [...prev, 'S'])}>
                    <p className={`${sizes.includes("S")? "bg-[#2c78cf] text-black":"bg-slate-200 text-black"} bg-slate-200 px-3 py-1 cursor-pointer`}>S</p>
                </div>
                <div onClick={()=> setSizes(prev => prev.includes('M')? prev.filter(item => item !== 'M'): [...prev, 'M'])}>
                    <p className={`${sizes.includes("M")? "bg-[#2c78cf] text-black" :"bg-slate-200 text-black"} bg-slate-200 px-3 py-1 cursor-pointer`}>M</p>
                </div>
                <div onClick={()=> setSizes(prev => prev.includes('L')? prev.filter(item => item !== 'L'): [...prev, 'L'])}>
                    <p className={`${sizes.includes("L")? "bg-[#2c78cf] text-black":"bg-slate-200 text-black"} bg-slate-200 px-3 py-1 cursor-pointer`}>L</p>
                </div>
            </div>
        </div>

        <div className="flex gap-2 mt-2">
            <input onChange={()=> setBestseller(prev =>!prev)} checked={bestseller} type="checkbox" id="bestseller"/>
            <label className="cursor-pointer text-white" htmlFor="bestseller">Add to bestseller</label>
        </div>

        <button type="submit" className="w-28 py-3 mt-4 bg-black text-white hover:bg-[#2c78cf] transition .2s ease-in ease-out">Add</button>
    </form>
  )
}

export default Add