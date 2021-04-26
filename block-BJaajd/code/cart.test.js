const Cart = require('./cart');

jest.mock('./cart');

beforeEach(() => {
    Cart.mockClear();
});

it('We can check if the constructor is called', () => {
    let cart = new Cart();
    expect(Cart).toHaveBeenCalledTimes(1);
});

it('We can check if a method in the class instance was called', () => {
    expect(Cart).not.toHaveBeenCalled();

    const cart = new Cart();
    
    expect(Cart).toHaveBeenCalledTimes(1);
    cart.addToCart("Apple");
    const cartOne = new Cart();
    cartOne.addToCart("Mango");
    
    let item = "Apple";
    let itemOne = "Mango";

    let mockCartInstance = Cart.mock.instances[0]; 
    let mockAddCart = mockCartInstance.addToCart;
    expect(mockAddCart.mock.calls[0][0]).toEqual(item);
    

    expect(mockAddCart).toHaveBeenCalledWith(item);
    expect(mockAddCart).toHaveBeenCalledTimes(1);
    expect(mockAddCart()).toBe(undefined);

    mockCartInstance = Cart.mock.instances[1];
    mockAddCart = mockCartInstance.addToCart;

    expect(mockAddCart.mock.calls[0][0]).toEqual(itemOne);    

    expect(mockAddCart).toHaveBeenCalledWith(itemOne);
    expect(mockAddCart).toHaveBeenCalledTimes(1);
});