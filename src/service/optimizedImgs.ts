import placeholderImg from '../assets/logo.webp'

const GetCroppedImgUrl = (url: string) => {
    if(!url) return placeholderImg
    const target = 'media/'
    const index = url.indexOf(target) + target.length
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index)
}

export default GetCroppedImgUrl