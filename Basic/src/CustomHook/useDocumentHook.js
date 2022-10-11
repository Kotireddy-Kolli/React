import {useEffect} from "react"
function useDocumentHook(count){
    useEffect(()=>{
        document.title=count
    },[count])
}
export default useDocumentHook

/* 
useEffect logic is being duplicated on 2 components,
we can create your own custom hook to reusing the logic*/