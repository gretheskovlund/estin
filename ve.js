   const MyComponent = () => {
     const navigate = useNavigate();

     const handleClick = () => {
       navigate('/path'); // Replace '/path' with the desired path
     };

     return (
       <button onClick={handleClick}>Navigate</button>
     );
   };
   