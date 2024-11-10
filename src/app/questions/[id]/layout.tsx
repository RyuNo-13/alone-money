import { ReactNode } from "react"

type pageIrast = {
    children: ReactNode
}

export default function SubLayout({ children }: pageIrast) {
    return (
        <div style={{background: 'red'}}>{children}</div>
    )
}