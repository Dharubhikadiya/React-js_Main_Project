import axios from "axios";
import { useEffect, useState } from "react"

const AdminCategory = () => {

    const [category, setCategory] = useState("");
    const [categorydata, setcategorydata] = useState([]);
    // const [editid, setEditid] = useState("");


    const handleSubmit = () => {
        
        axios.post(` http://localhost:8000/category`,{
            category : category
        }).then((res)=>{
            console.log(res.data);
            alert("category update");
            setCategory("")
            getuser();
        }).catch((err)=>{
            console.log(err);
            return false
          }); 
    }

    const getuser = () => {
            axios.get(` http://localhost:8000/category`)
            .then((res)=>{
                setcategorydata(res.data)
            }).catch((err)=>{
                console.log(err);
                return false
              }); 
    }

    useEffect(()=>{
        getuser();
    },[])

    // const handleSubmit = () => {
    //     if (editid) {
    //         axios.put(` http://localhost:8000/category/${editid}`, {
    //             category: category
    //         })
    //             .then((res) => {
    //                 alert("category succesfully update");
    //                 setCategory(res.data)
    //                 setCategory("");
    //                 setEditid("");
    //                 getuser();
    //                 console.log(getuser);
    //             }).catch((err) => {
    //                 console.log(err);
    //                 return false;
    //             })
    //     } else {
    //         axios.post(`http://localhost:8000/category`, {
    //             category: category
    //         })
    //             .then((res) => {
    //                 alert("category succesfully add");
    //                 setCategory("");
    //                 getuser();
    //             }).catch((err) => {
    //                 console.log(err);
    //                 return false;
    //             })
    //     }
    // }
    // const getuser = () => {
    //     axios.get(` http://localhost:8000/category`)
    //         .then((res) => {
    //             setcategorydata(res.data);
    //         }).catch((err) => {
    //             console.log(err);
    //             return false;
    //         })
    // }

    // useEffect(() => {
    //     getuser();
    // }, [])

    return (
        <center className="mt-5 pt-5">
            <table>
                <thead>
                    <tr>
                        <td>category :-</td>
                        <td><input type='category' name="category" onChange={(e) => setCategory(e.target.value)} value={category} ></input></td>
                    </tr>
                    <tr>
                        <td>
                            {
                                // editid ? (<button onClick={() => handleSubmit()}>edit</button>) :
                                //     (<button onClick={() => handleSubmit()}>submit</button>)
                            }
                            <button onClick={() => handleSubmit()}>submit</button>
                        </td>
                    </tr>
                </thead>
            </table>
            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>category</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        categorydata.map((val) => {
                            return (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.category}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </center>
    )
}
export default AdminCategory;