type ContactFormValues = {
    name: string;
    email: string;
};

const contactForm: Form<ContactFormValues> = {
    values: {
        name: '',
        email: '',
    },
    errors: {},
};
