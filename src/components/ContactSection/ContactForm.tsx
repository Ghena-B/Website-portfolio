import './ContactForm.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import successAnimation from '../../assets/animations/successAnimation.json';
import errorAnimation from '../../assets/animations/errorAnimation.json';
import Lottie from "lottie-react";

const userID = process.env.REACT_APP_EMAILJS_USER_ID ?? '';
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? '';
const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID ?? '';

export const ContactForm = () => {
    const { register, handleSubmit } = useForm();
    const [submissionStatus, setSubmissionStatus] = useState<null | 'success' | 'error'>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = (data: Record<string, unknown>) => {
        setIsSubmitting(true);
        emailjs.send(serviceID, templateID, data, userID)
            .then(() => {
                setSubmissionStatus('success');
                setIsSubmitting(false);
            }, () => {
                setSubmissionStatus('error');
                setIsSubmitting(false);
            });
    };

    return (
        <div data-aos="slide-right">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Full name</label>
                <input type="text"
                       placeholder="Name"
                       {...register("name", {required: true, maxLength: 80})} />
                <label htmlFor="email">Email Address</label>
                <input type="email"
                       placeholder="Email"
                       {...register("email", {required: true})} />
                <label htmlFor="message">Message</label>
                <textarea {...register("message")}
                          placeholder="Type your message here"/>
                <div className="d-flex align-items-center justify-content-start gap-2">
                    <button type="submit"
                            className="button-form hover-enlarge"
                            disabled={isSubmitting}>Send
                    </button>
                    {submissionStatus === 'success' &&
                        <div className="lottie-container">
                            <Lottie
                                loop={false}
                                autoplay={true}
                                animationData={successAnimation}
                                rendererSettings={{
                                    preserveAspectRatio: 'xMidYMid slice'
                                }}
                                height={36}
                                width={36}
                            />
                        </div>
                    }
                    {submissionStatus === 'error' &&
                        <div className="lottie-container">
                            <Lottie
                                loop={false}
                                autoplay={true}
                                animationData={errorAnimation}
                                rendererSettings={{
                                    preserveAspectRatio: 'xMidYMid slice'
                                }}
                                height={36}
                                width={36}
                            />
                        </div>
                    }
                </div>
            </form>
        </div>
    );
}
