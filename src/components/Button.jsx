/* eslint-disable react/prop-types */
function Button({ children, onClick }) {
   return (
      <p>
         <button type="button" onClick={onClick}>
            {children}
         </button>
      </p>
   )
}

export default Button
