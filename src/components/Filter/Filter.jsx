export const Filter = ({onChange, text}) =>{
    return (
        <>
        <p>Find contacts by name:</p>
        <input 
        type="text" 
        name="filter"
        value = {text}
        onChange={onChange}
        />
        </>
    )
}