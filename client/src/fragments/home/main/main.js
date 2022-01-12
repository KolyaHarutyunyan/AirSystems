import styled from "styled-components"

const MainStyled = styled.main`

`

export const Main = () => {
    return (
        <MainStyled>
            <section className="best-experience"></section>
            <section className="free-quotes"></section>
            <section className="providing-services"></section>
            <section className="wisetack-financing"></section>
            <section className="customers-opinion"></section>
            <section className="partners"></section>
        </MainStyled>
    )
}
