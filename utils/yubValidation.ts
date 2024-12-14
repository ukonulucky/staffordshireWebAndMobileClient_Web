import * as yup from 'yup'

export const userDataUpdateSchema = yup.object({
    firstName: yup.string().required("First name is  required"),
    lastName: yup.string().required('Last name is required'),
  phoneNumber: yup.string().required('Phone number is reqjuired'),
  email: yup.string().required('Phone number is reqjuired'),
  image: yup.string().required("Image is required")
})
  




// Define the schema using Yup
export const signUpSchema = yup.object({
  fullname: yup.string().required("Full name is required"),
  email: yup.string().email('Invalid email address').required('Email is required'),
 password: yup.string().min(6, " Password must have a minimum lenght of 6 characters ").max(12, "Passoword cannot exceed 12 characters").required("Password is required")
})



export const editProfileSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup.string().required('Phone number is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  role: yup.string().required("User role is required"),
  image: yup.string().required("User image is required")
 
})


export const loginSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required')
})


export const registerStoreSchema = yup.object({
  storeName: yup.string().required("Store name is required"),
  storeOwner: yup.string().required('Store owner name is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  storeImage: yup.string().required("Store image is required"),
  storeAddress: yup.string().required("Store address is required"),
  
})





export const changePasswordSchema = yup.object().shape({
  currentPassword: yup.string().required('Password is required'),
  newPassword: yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('newPassword'), undefined], 'Passwords must match')
    .required('Confirm password is required')
});


