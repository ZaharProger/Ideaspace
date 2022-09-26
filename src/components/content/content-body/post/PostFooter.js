import React, { useEffect } from 'react';

const PostFooter = () => {
    useEffect(() => {
        Array.from(document.getElementById('Post-footer').getElementsByTagName('i')).forEach(footerItem => {
            footerItem.onmouseover = () => {
                footerItem.classList.replace('fa-regular', 'fa-solid');
                footerItem.style.color = footerItem.classList.contains('fa-heart')? '#ee0000' : '#eaea00';
            }
            footerItem.onmouseleave = () => {
                footerItem.classList.replace('fa-solid', 'fa-regular');
                footerItem.style.color = '#787878';
            }
            footerItem.onclick = () => {
                if (!footerItem.classList.contains('post-footer-animation')){
                    footerItem.classList.add('post-footer-animation');
                    setTimeout(() => footerItem.classList.remove('post-footer-animation'), 1100);
                }
            }
        })
    })

    return(
        <div id="Post-footer" className="d-flex flex-row align-items-center">
            <i className='fa-regular fa-heart me-3 ms-3'></i>
            <i className='fa-regular fa-star ms-3'></i>
        </div>
    )
}

export default PostFooter;