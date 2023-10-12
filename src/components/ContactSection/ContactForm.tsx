import {useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';
import './ContactForm.css'
const userID = process.env.REACT_APP_EMAILJS_USER_ID
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        // @ts-ignore
        emailjs.send(serviceID, templateID, data, userID)
            .then(response => {
                console.log('SUCCESS!', response.status, response.text);
            }, error => {
                console.error('FAILED...', error);
            });
    };
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label htmlFor="name">Full name</label>
            <input type="text" placeholder="Name" {...register("name", {required: true, maxLength: 80})} />
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="Email" {...register("email", {required: true})} />
            <label htmlFor="message">Message</label>
            <textarea {...register("message")} placeholder="Type your message here"/>

            <button type={"submit"} className={"button-form"}>Send</button>
        </form>
    )
}
