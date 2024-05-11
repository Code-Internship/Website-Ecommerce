import React from 'react';
import { Box } from '@material-ui/core';

const ShoppingCart = () => {
//   const btn = document.querySelectorAll('button');

//   btn.forEach(function (button, index) {
//     button.addEventListener('click', function (event) {
//       var btnItem = event.target;
//       var product = btnItem.parentElement;
//       var productImg = product.querySelector('img').src;
//       var productName = product.querySelector('h1').innerText;
//       var productPrice = product.querySelector('span').innerText;
//       addCart(productImg, productName, productPrice);
//     });
//   });

//   function addCart(productImg, productName, productPrice) {
//     var addTr = document.createElement('tr');
//     var cartItem = document.querySelectorAll('tbody tr');
//     for (var i = 0; i < cartItem.length; i++) {
//       var productT = document.querySelectorAll('.title');
//       if (productT[i].innerHTML === productName) {
//         alert('Sản phẩm của bạn đã có trong giỏ hàng');
//         return;
//       }
//     }
//     var trContent =
//       '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="' +
//       productImg +
//       '" alt=""><span class="title">' +
//       productName +
//       '</span></td><td><p><span class="prices">' +
//       productPrice +
//       '</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>';
//     addTr.innerHTML = trContent;
//     var cartTable = document.querySelector('tbody');
//     cartTable.append(addTr);
//   }

  return (
    <Box>
      
    </Box>
  );
};

export default ShoppingCart;