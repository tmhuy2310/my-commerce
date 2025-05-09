import React from 'react';
import CartItem from '../../components/Cart/CartItem';
import { Button } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Cart = () => {
    return (
        <div className='mt-10'>
            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="col-span-2">
                    {[1, 1, 1, 1].map((item) => (
                        <CartItem />
                    ))}
                </div>
                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="border-0 rounded-xl shadow-lg bg-gradient-to-br from-indigo-50 to-white p-6">
                        <p className="uppercase font-bold text-indigo-800 tracking-wider pb-4">Order Summary</p>
                        <div className="h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent my-2"></div>

                        <div className="space-y-4 font-medium">
                            <div className="flex justify-between pt-3 text-gray-700">
                                <span className="flex items-center">
                                    <LocalOfferIcon className="mr-2 text-indigo-500" fontSize="small" />
                                    Price
                                </span>
                                <span className="text-indigo-900">$467</span>
                            </div>

                            <div className="flex justify-between pt-3 text-gray-700">
                                <span>
                                    <RemoveCircleOutlineIcon className="mr-2 text-green-500" fontSize="small" />
                                    Discount
                                </span>
                                <span className="text-green-600 font-semibold">-$319</span>
                            </div>

                            <div className="flex justify-between pt-3 text-gray-700">
                                <span className="flex items-center">
                                    <InventoryIcon className="mr-2 text-indigo-500" fontSize="small" />
                                    Delivery Charge
                                </span>
                                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-bold">
                                    FREE
                                </span>
                            </div>

                            <div className="h-px bg-gradient-to-r from-indigo-100 via-indigo-300 to-indigo-100 my-3"></div>

                            <div className="flex justify-between pt-3 text-indigo-900 font-bold">
                                <span className="text-lg">Total Amount</span>
                                <span className="text-xl">$1278</span>
                            </div>

                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    display: 'flex',
                                    marginTop: 4,
                                    marginBottom: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 28,
                                    border: 'none',
                                    background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
                                    padding: '14px 16px',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: '#fff',
                                    textTransform: 'none',
                                    boxShadow: '0 4px 14px 0 rgba(79, 70, 229, 0.39)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #4338ca 0%, #4f46e5 100%)',
                                        boxShadow: '0 6px 20px 0 rgba(79, 70, 229, 0.45)',
                                        transform: 'translateY(-2px)',
                                    },
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                            >
                                Complete Purchase
                            </Button>

                            <p className="text-center text-xs text-gray-500 mt-2">Secure payment processing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
