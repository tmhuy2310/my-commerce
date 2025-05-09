import React, { useState } from 'react';
import { NumberField } from '@base-ui-components/react/number-field';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    originalPrice: '$220',
    discount: '15% off',
};
const styles = {
    Field: 'flex flex-col items-start gap-1',
    Group: 'flex shadow-md rounded-xl overflow-hidden',
    Decrement:
        'flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-l-xl transition-all duration-200 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2',
    Input: 'w-14 h-10 border-t-2 border-b-2 border-indigo-600 bg-white px-2 text-center font-semibold text-gray-800 focus:outline-none focus:bg-gray-50',
    Increment:
        'flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-600 text-white rounded-r-xl transition-all duration-200 hover:from-orange-400 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2',
    RemoveButton:
        'px-4 py-2 text-sm font-semibold text-red-500 bg-white border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-200 focus:outline-none',
};
// This is our modified CartItem component that properly handles
// disabling the decrement button when the value reaches the minimum
const CartItem = () => {
    const id = React.useId();
    const [value, setValue] = useState(1);
    const minValue = 1;

    // Function to check if the value is at minimum
    const isAtMinValue = () => value <= minValue;

    // Custom render for the Decrement button to apply disabled styling
    const renderDecrementButton = (props) => {
        const isDisabled = isAtMinValue();

        return (
            <button
                {...props}
                disabled={isDisabled}
                className={`${styles.Decrement} ${isDisabled ? 'opacity-40 cursor-not-allowed' : ''}`}
                aria-disabled={isDisabled}
            >
                <RemoveIcon />
            </button>
        );
    };

    return (
        <div className="p-6 bg-white shadow-sm rounded-lg border border-gray-200 mb-6">
            <div className="flex lg:items-center">
                <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                    <img
                        className="w-full h-full object-cover object-center"
                        src="https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/f/z/l/m-white-formal-youthfirst-original-imagqjdfgwjfwgsb.jpeg?q=70"
                        alt="Product"
                    />
                </div>

                <div className="mt-4 lg:mt-0 ml-0 lg:ml-6">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">White / Medium</p>
                    <p className="mt-1 text-sm text-gray-500">Cotton Blend</p>

                    <div className="mt-4 flex items-center space-x-4">
                        <p className="text-lg font-medium text-gray-900">{product.price}</p>
                        <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
                        <p className="text-sm font-medium text-green-600">{product.discount}</p>
                    </div>
                </div>
            </div>
            <div className="pt-4 mt-6 lg:mt-0 w-full lg:w-auto flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                {/* Using NumberField with modified rendering for the decrement button */}
                <NumberField.Root
                    id={id}
                    defaultValue={1}
                    className={styles.Field}
                    min={minValue}
                    onValueChange={(event, newValue) => setValue(Math.max(minValue, newValue))}
                >
                    <NumberField.Group className={styles.Group}>
                        {/* Use custom render function for Decrement button */}
                        <NumberField.Decrement render={renderDecrementButton} />
                        <NumberField.Input className={styles.Input} />
                        <NumberField.Increment className={styles.Increment}>
                            <AddIcon />
                        </NumberField.Increment>
                    </NumberField.Group>
                </NumberField.Root>

                <button variant="outlined" size="medium" className={styles.RemoveButton}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
