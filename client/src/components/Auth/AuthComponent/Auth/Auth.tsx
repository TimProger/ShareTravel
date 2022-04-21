import React from "react";
import './Auth.css'
import { useForm } from "react-hook-form";
import {NavLink} from "react-router-dom";
import {useActions} from "../../../../hooks/useActions";

interface FormData {
    email: string;
    password: string;
}

export default function Auth() {
    const {formAuth} = useActions()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            email: "",
            password: ""
        }
    });
    return (
        <form onSubmit={handleSubmit((formData):void => {
            formAuth(formData)
        })}>
            <div className="item email">
                <input type={"email"} placeholder={'Почта'} {...register("email", { required: true })} />
                {errors.email ? <span>{errors.email.message}</span> : null}
            </div>
            <div className="item password">
                <input
                    type={"password"}
                    placeholder={'Пароль'}
                    {...register("password",{required: true})}
                />
                {errors.password ? <span>{errors.password.message}</span> : null}
            </div>
            <input type="submit" /> Или <NavLink to={'/registration'}>Зарегистрируйтесь</NavLink>
        </form>
    );
}