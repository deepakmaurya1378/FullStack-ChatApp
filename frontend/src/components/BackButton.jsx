import { FaArrowLeft } from 'react-icons/fa'; // Import the back arrow icon from FontAwesome

const BackButton = () => {
  const handleBack = () => {
    // Implement your back functionality, for example:
    window.history.back(); // Go back to the previous page
  };

  return (
    <button
      onClick={handleBack}
      className="p-2 bg-base-300  rounded-full  flex items-center"
    >
      <FaArrowLeft size={24} />
      <span className="ml-2">Back</span>
    </button>
  );
};

export default BackButton;
