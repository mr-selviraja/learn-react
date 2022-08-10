import './Searchbox.Styles.css';

const Searchbox = ({ onChangeHandler, placeholder, className }) => {
        // const { onChangeHandler, placeholder, className } = props

        return(
            <input 
                type = "search" 
                className = { `searchbox ${className}` }
                placeholder = { placeholder }
                onChange = { onChangeHandler }   
            />
        )
}

export default Searchbox;