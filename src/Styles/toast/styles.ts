import styled from "styled-components"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const Toast = styled(ToastContainer)`
    .Toastify__toast--success{
        background-color: var(--gray-3);
        color: var(--gray-0)
    }
    .Toastify__toast--error{
        background-color: var(--gray-3);
        color: var(--gray-0)
    }
`