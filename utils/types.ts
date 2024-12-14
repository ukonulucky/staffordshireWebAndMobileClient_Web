import { ImageProps } from "next/image"


export type serviceListArrayType = {
    serviceName: string,
    serviceAmount: number
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