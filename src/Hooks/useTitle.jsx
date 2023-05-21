import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Fancy-Cars | ${title}`
    },[title])
}

export default useTitle;