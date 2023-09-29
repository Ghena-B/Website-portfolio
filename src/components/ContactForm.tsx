import {useForm} from "react-hook-form";

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: 'column'}}>
            <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
            <input type="email" placeholder="Email" {...register("Email", {required: true})} />
            <textarea {...register} placeholder="Type your message here"/>

            <input type="submit" />
        </form>
    )
}
