import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  // dashboard画面にリダイレクトする。
  // @see https://zenn.dev/nus3/scraps/d04f5026bab361
  const router = useRouter()
  useEffect(()=>{
    router.push("dashboard")
  })
  return null
}