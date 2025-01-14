import { ImageProps } from "next/image"


export type serviceListArrayType = {
    serviceName: string,
    servicePrice: string,
    serviceId: string
}[]
export type serviceType = {
    serviceImageUrl: string,
    serviceHeading: string,
    serviceSubHeading: string,
    serviceList: serviceListArrayType,
    index: number
}

export type mapPropTypes = {
    lat: number,
    lng: number
}

export type formType = {
    fullName: string,
    email: string,
    phone: string,
    date: string,
    service: string

}
export type datePickerPropType = {
    handleDate: (date: string) => void
}

export type serviceAndCategoryType = {
    category: {
        categoryName: string,
        categoryId: number,
        categoryImage: string
    },
    services: {
        serviceName: string,
        servicePrice: string,
        serviceId: string
    }[]


}