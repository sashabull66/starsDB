
export const WithChildFunction = (FN) => (Wrapper) => {
    return (props) => {
        return <Wrapper {...props}>
            {FN}
        </Wrapper>
    }
}