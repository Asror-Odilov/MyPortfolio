import React from 'react'
import { motion } from 'framer-motion'

export const ForSvg = () => {

    const animation = {
        hidden: { y: '10vh', },
        show: { y: 0,
        transition: { duration: 1}  
      }}

  return (
    <div>
        <motion.svg width="500" height="570" viewBox="0 -10 581 603" fill="none" xmlns="http://www.w3.org/2000/svg"
             variants={animation}
             initial="hidden"
             whileInView="show"
        >
            <rect width="581" height="603" />
            <g id="undraw_mobile_prototyping_grmd 1" >
            <g id='g-1'>
                <path id="Vector3" d="M580.5 119.758V581.825C580.497 587.329 578.403 592.608 574.679 596.499C570.954 600.391 565.903 602.577 560.636 602.577H381.168C378.559 602.582 375.975 602.049 373.563 601.007C371.152 599.966 368.961 598.438 367.116 596.51C365.27 594.582 363.807 592.293 362.81 589.773C361.813 587.253 361.301 584.552 361.305 581.825V119.758C361.305 117.032 361.818 114.332 362.817 111.813C363.815 109.294 365.278 107.005 367.122 105.077C368.967 103.149 371.157 101.62 373.566 100.577C375.976 99.5334 378.559 98.9964 381.168 98.9965H408.029V102.599C408.029 107.133 409.752 111.481 412.819 114.687C415.887 117.893 420.047 119.694 424.384 119.694H515.658C519.995 119.694 524.155 117.893 527.222 114.687C530.289 111.481 532.013 107.133 532.013 102.599V98.9965H560.636C563.245 98.9956 565.828 99.532 568.239 100.575C570.649 101.618 572.839 103.147 574.684 105.076C576.528 107.004 577.991 109.293 578.989 111.812C579.987 114.331 580.5 117.032 580.5 119.758V119.758Z" fill="blue"/>
                <path id="Vector" d="M572.016 171.089H368.563V274.668H572.016V171.089Z" fill="white"/>
                <path id="Vector_2" d="M554.445 337.807H387.385V347.393H554.445V337.807Z" fill="#F0F0F0"/>
                <path id="Vector_3" d="M554.445 353.25H387.385V362.836H554.445V353.25Z" fill="#F0F0F0"/>
                <path id="Vector_4" d="M554.445 368.694H387.385V378.279H554.445V368.694Z" fill="#F0F0F0"/>
                <path id="Vector_5" d="M554.445 384.137H387.385V393.722H554.445V384.137Z" fill="#F0F0F0"/>
                <path id="Vector_6" d="M502.74 488.547L473.729 457.643L442.608 489.561L471.619 520.465L502.74 488.547Z" fill="#F0F0F0"/>
                <path id="Vector3_2" d="M470.538 251.395C464.261 251.423 458.119 249.671 452.887 246.361C447.655 243.052 443.568 238.333 441.144 232.802C438.72 227.271 438.068 221.176 439.269 215.288C440.47 209.4 443.47 203.983 447.892 199.722C452.313 195.462 457.956 192.549 464.107 191.352C470.258 190.155 476.641 190.727 482.449 192.997C488.257 195.267 493.228 199.133 496.735 204.105C500.242 209.077 502.127 214.932 502.151 220.93C502.173 228.971 498.857 236.693 492.931 242.405C487.004 248.116 478.951 251.349 470.538 251.395V251.395ZM470.316 195.796C465.085 195.819 459.978 197.324 455.641 200.12C451.303 202.915 447.929 206.877 445.946 211.504C443.963 216.131 443.459 221.214 444.499 226.112C445.539 231.01 448.076 235.502 451.788 239.02C455.501 242.539 460.223 244.925 465.356 245.878C470.49 246.83 475.805 246.307 480.63 244.373C485.454 242.439 489.572 239.182 492.461 235.013C495.35 230.844 496.881 225.952 496.862 220.953C496.827 214.253 494.013 207.841 489.036 203.125C484.059 198.409 477.327 195.773 470.316 195.796V195.796Z" fill="black"/>
            </g>
            <g id="g-2">
                <path id="Vector2" d="M219.195 20.7618V482.828C219.192 488.333 217.098 493.611 213.374 497.503C209.649 501.395 204.598 503.581 199.332 503.581H19.863C17.254 503.586 14.6698 503.052 12.2584 502.011C9.84702 500.97 7.65592 499.441 5.81068 497.514C3.96544 495.586 2.50234 493.296 1.50522 490.776C0.508109 488.256 -0.00340939 485.555 -1.37217e-05 482.828V20.7618C-0.000126323 18.0353 0.513566 15.3355 1.51173 12.8165C2.5099 10.2975 3.97299 8.00868 5.81746 6.08075C7.66194 4.15281 9.85166 2.62351 12.2616 1.58017C14.6715 0.536833 17.2545 -0.000112013 19.863 1.09823e-06H46.7241V3.60243C46.7241 8.13637 48.4472 12.4846 51.5144 15.6906C54.5816 18.8965 58.7416 20.6977 63.0793 20.6977H154.353C158.69 20.6976 162.85 18.8965 165.917 15.6905C168.985 12.4846 170.708 8.13635 170.708 3.60243V1.09823e-06H199.332C201.94 -0.000885895 204.524 0.535527 206.934 1.57859C209.344 2.62165 211.534 4.15093 213.379 6.07902C215.223 8.0071 216.686 10.2962 217.684 12.8156C218.682 15.3349 219.195 18.0351 219.195 20.7618V20.7618Z" fill="#D9D9D9"/>
                <path id="Vector_7" d="M196.429 252.304H21.0381V88.2268H196.429V252.304ZM22.792 250.471H194.675V90.0601H22.792V250.471Z" fill="#3F3D56"/>
                <path id="Vector_8" d="M22.4996 88.46L21.3306 89.8268L194.967 252.071L196.136 250.704L22.4996 88.46Z" fill="#3F3D56"/>
                <path id="Vector_9" d="M194.969 88.4614L21.3293 250.703L22.4983 252.07L196.138 89.8283L194.969 88.4614Z" fill="#3F3D56"/>
                <path id="Vector_10" d="M195.552 299.969H21.9151V301.803H195.552V299.969Z" fill="#3F3D56"/>
                <path id="Vector_11" d="M195.552 316.469H21.9151V318.302H195.552V316.469Z" fill="#3F3D56"/>
                <path id="Vector_12" d="M195.552 332.968H21.9151V334.801H195.552V332.968Z" fill="#3F3D56"/>
                <path id="Vector_13" d="M108.733 349.468H21.9151V351.301H108.733V349.468Z" fill="#3F3D56"/>
                <path id="Vector2_2" d="M108.733 365.967H21.9151V367.8H108.733V365.967Z" fill="#3F3D56"/>
            </g>
            <path id="Vector_14" d="M242.889 242.397L241.172 243.879L311.54 332.959L313.257 331.477L242.889 242.397Z" fill="#3F3D56"/>
            <path id="Vector_15" d="M320.956 343.051C315.12 339.516 307.037 335.856 300.67 334.758L311.276 330.797L317.002 320.662C316.829 327.405 318.737 336.394 320.956 343.051Z" fill="#3F3D56"/>
            </g>
            <defs>
            <clipPath id="clip0_0_1">
            <rect width="581" height="603" fill="white"/>
            </clipPath>
            </defs>
        </motion.svg>

    </div>
  )
}
