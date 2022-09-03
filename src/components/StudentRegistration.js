import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const StudentRegistration = () => {

    var cities = [
        {
            name: "Hyderabad",
        },
        {
            name: "Bangalore",
        },
        {
            name: "Chennai",
        }
    ]
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const submit = (data) => {
        console.log("form data", data);
    };

    console.log("errors", errors);

    const validationSchma = {
        phone: {
            pattern: {
                value: /^[6-9]{1}[0-9]{9}$/,
                message: "Phone number must be 10 digits"
            }
        },
        age: {
            required: "required...",

            minLength: {
                value: 5,
                message: "Password must have at least 8 characters",
            },
            maxLength: {
                value: 10,
                message: "Password must have at most 10 characters",
            }
        },
        // gender: {
        //     required: "required...",
        //     const : {
        //         type: "radio",
        //         name: props.name,
        //         className: props.className
        //       }

        // }


    };
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>Name : </label> &nbsp;
                    <input
                        type="text"
                        name="name"
                        {...register("name", { required: "name is required..." })}
                    ></input>
                    {errors.name && <div>{errors.name.message}</div>}
                </div> <br></br>

                <div>
                    <label>Email : </label>&nbsp;
                    <input type="text" name="email" {...register("email")}></input>
                </div><br></br>

                <div>
                    <label>Phone : </label>&nbsp;
                    <input type="text" name="phone" {...register("phone", validationSchma.phone)}></input>
                    {
                        errors.phone && <div>{errors.phone.message}</div>
                    }
                </div><br></br>

                <div>
                    <label>Age : </label> &nbsp;
                    <input
                        type="text"
                        name="age"
                        {...register("age", validationSchma.age)}
                    ></input> <br></br>
                    {errors.age && <div>{errors.age.message}</div>}
                    <br></br>

                    <div>
                        <label> Gender :  <br></br>
                            <input
                                {...register('gender', { required: true })}
                                type="radio"
                                name="gender"
                                value="Male"
                            />{' '}
                            Male
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                {...register('gender', { required: true })}
                                type="radio"
                                name="gender"
                                value="Female"
                            />{' '}
                            Female
                        </label>
                    </div>

                    <div>
                        {errors.gender?.type === 'required' && 'please select any one '}
                    </div><br></br>

                    <div>
                        <label>Hobbies : </label> <br></br>
                        <input type="checkbox" name="hobbies" value="reading" {...register("hobby")}></input> READING &nbsp;
                        <input type="checkbox" name="hobbies" value="Writing" {...register("hobby")}></input> Writing &nbsp;
                        <input type="checkbox" name="hobbies" value="Traveling" {...register("hobby")}></input> Traveling &nbsp;
                    </div> <br></br>

                    <div>
                        <label></label>
                        <select name="city" {...register("city")}>
                            <option value="">Select City</option>
                            {
                                cities.map(city => {
                                    return (
                                        <option value={city.name}>{city.name}</option>
                                    )
                                })
                            }
                        </select>

                        {/* <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Ahmedabad">Ahmedabad</option>
               */}
                    </div> <br></br>
                    <input type="submit" disabled={Object.keys(errors).length !== 0 ? true : false} value="Submit"></input>
                </div>
            </form>
        </div>
    );
};