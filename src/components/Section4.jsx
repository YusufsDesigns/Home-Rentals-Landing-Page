import { useState } from 'react'
import '../style.css'

export default function SectionFour() {
    const [formData, setFormData] = useState({
        username: '',
        address: '',
        unitNumber: '',
        city: '',
        state: '',
        roomType: '',
        currency: '',
        price: '',
        description: ''
    })

    const [username, setUsername] = useState('')
    const [adress, setAdress] = useState('')
    const [unitNumber, setUnitNumber] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [roomType, setRoomType] = useState('')
    const [currency, setCurrency] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function checkInputs() {
        if(formData.username === '') {
            setUsername('error');
        } else {
            setUsername('success');
        }
        
        if(formData.address === '') {
            setAdress('error');
        } else {
            setAdress('success');
        }
        
        if(formData.unitNumber === '') {
            setUnitNumber('error');
        } else {
            setUnitNumber('success');
        }
        
        if(formData.city === '') {
            setCity('error');
        } else{
            setCity('success');
        }
        
        if(formData.state === '') {
            setState('error');
        } else{
            setState('success');
        }
        
        if(formData.roomType === '') {
            setRoomType('error');
        } else{
            setRoomType('success');
        }
        
        if(formData.currency === '') {
            setCurrency('error');
        } else{
            setCurrency('success');
        }
        
        if(formData.price === '') {
            setPrice('error');
        } else{
            setPrice('success');
        }
        
        if(formData.description === '') {
            setDescription('error');
        } else{
            setDescription('success');
        }
    }
    
    function setError(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }
    
    function setSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
        
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    function handleSubmit(event){
        event.preventDefault()

        checkInputs()
    }


    return(
        <section className='section-4'>
            <div className="container">
                <h3>Your property with us and be Confident that Your Room will be Filled Out!</h3>
                <div className='form-body'>
                    <h2>Add A New Property</h2>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-head">
                            <div className="form-group">
                                <div className="form-control">
                                    <label htmlFor="1">Name <span>*</span></label>
                                    <input 
                                        type="text" 
                                        id='1' 
                                        placeholder='Enter Name' 
                                        name='username' 
                                        className={username}
                                        onChange={handleChange} 
                                        value={formData.username} />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="2">Address <span>*</span></label>
                                    <input 
                                        type="text" 
                                        id='2' 
                                        placeholder='Enter Address' 
                                        name='address' 
                                        className={adress}
                                        onChange={handleChange} 
                                        value={formData.address} />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="3">Unit Number <span>*</span></label>
                                    <input 
                                        type="text" 
                                        id='3' 
                                        placeholder='Enter Unit' 
                                        name='unitNumber' 
                                        className={unitNumber}
                                        onChange={handleChange} 
                                        value={formData.unitNumber} />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="4">City <span>*</span></label>
                                    <select 
                                        name="city" 
                                        className={city}
                                        id="4" 
                                        onChange={handleChange} 
                                        value={formData.city}>
                                        <option value="">Select City</option>
                                        <option value="San Fransisco">San Fransisco</option>
                                        <option value="Miami">Miami</option>
                                        <option value="Ohio">Ohio</option>
                                        <option value="Lagos">Lagos</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="5">State <span>*</span></label>
                                    <select 
                                        name="state" 
                                        className={state}
                                        id="5" 
                                        onChange={handleChange} 
                                        value={formData.state}>
                                        <option value="">Select State</option>
                                        <option value="Paris">Paris</option>
                                        <option value="London">London</option>
                                        <option value="Carlifonia">Carlifonia</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="6">Room Type <span>*</span></label>
                                    <select 
                                        name="roomType" 
                                        className={roomType}
                                        id="6" 
                                        onChange={handleChange} 
                                        value={formData.roomType}>
                                        <option value="">Select Room Type</option>
                                        <option value="1">Private</option>
                                        <option value="2">Shared</option>
                                        <option value="3">Common</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="7">Currency <span>*</span></label>
                                    <select 
                                        name="currency" 
                                        className={currency}
                                        id="7" 
                                        onChange={handleChange} 
                                        value={formData.currency}>
                                        <option value="">Select Currency</option>
                                        <option value="1">Dollar</option>
                                        <option value="2">Pound Sterlin</option>
                                        <option value="3">Yen</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="8">Price <span>*</span></label>
                                    <input 
                                        type="text" id='8' 
                                        placeholder='Enter Price' 
                                        name='price' 
                                        className={price}
                                        onChange={handleChange} 
                                        value={formData.price} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="9">Description <span>*</span></label>
                                <textarea 
                                    name="description" 
                                    className={description}
                                    id="9" 
                                    cols="30" 
                                    rows="10" 
                                    placeholder='Enter Description' 
                                    onChange={handleChange} 
                                    value={formData.description} >
                                </textarea>
                            </div>
                            <div className="file">
                                <label>Upload Photo</label>
                                <div className="file-btn">
                                    <span>Drag your images here, or <span className='orange'>browse</span></span>
                                    <span>Supported:  JPG, JPEG, PNG</span>
                                </div>
                            </div>
                        </div>
                        <div className='btn'>
                            <input type="submit" className='submit-btn' value="Add New Property" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}