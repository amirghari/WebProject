// import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/App.css'

const MainHome = () => {
  return (
    <>
      <div className="container">
        <div className="home_head">
          <h1 className="home_head_title">
            Better Teamwork, More Work Done, All in one
          </h1>
          <p className="home_head_caption">
            TaskManager is an Easy-to-Use Online Platform for Project and Task
            Management for Everyone.
          </p>
          <button className="btn btn-home">
            <Link to={'/TaskApp'} className="link-style">
              Get Started
            </Link>
          </button>

          <div className="home_head_img">
            <svg
              data-name="Layer 1"
              width="43.5%"
              height="50%"
              viewBox="0 0 732.853 614.572"
            >
              <path
                fill="#2f2e41"
                d="M322.091 232.107L486.005 91.904l.76 2.058-163.336 139.709-1.338-1.564z"
              />
              <circle cx="499.947" cy="99.612" r="24.022" fill="#0bbfae" />
              <path
                fill="#0bbfae"
                d="M702.416 152.806H483.078a7.153 7.153 0 110-14.307h219.338a7.153 7.153 0 110 14.307zM702.416 181.072H483.078a7.154 7.154 0 110-14.307h219.338a7.154 7.154 0 110 14.307zM578.156 209.339h-95.078a7.154 7.154 0 010-14.307h95.078a7.154 7.154 0 010 14.307z"
              />
              <circle cx="540.434" cy="281.8" r="16.465" fill="#e6e7e8" />
              <path
                fill="#e6e7e8"
                d="M679.212 318.26h-150.34a4.903 4.903 0 110-9.806h150.34a4.903 4.903 0 110 9.806zM566.212 337.635h-37.34a4.903 4.903 0 010-9.807h37.34a4.903 4.903 0 010 9.807z"
              />
              <circle cx="487.883" cy="446.459" r="16.465" fill="#e6e7e8" />
              <path
                fill="#e6e7e8"
                d="M626.66 482.919H476.322a4.903 4.903 0 110-9.806h150.34a4.903 4.903 0 110 9.806zM566.66 502.293h-90.339a4.903 4.903 0 110-9.806h90.34a4.903 4.903 0 110 9.806zM541.49 521.668H476.32a4.903 4.903 0 110-9.807h65.169a4.903 4.903 0 010 9.807z"
              />
              <path
                fill="#f2f2f2"
                d="M42.578 576.499c-25.714-12.185-44.867-36.7-41.88-63.642 23.07 18.68 54.477 29.111 86.9 28.862 12.63-.097 26.773-1.382 35.95 5.704 5.71 4.41 8.285 11.41 8.61 18.388.326 6.978-1.365 14.04-3.047 21.01l.511 1.652c-30.192 1.922-61.33.211-87.044-11.974z"
              />
              <path
                fill="#fff"
                d="M1.332 512.79c9.945 19.406 27.188 35.58 48.617 45.047a51.442 51.442 0 0014.828 4.357 33.524 33.524 0 0015.425-2.016c4.657-1.672 9.248-3.848 14.187-4.51a18.158 18.158 0 0113.72 3.7c4.564 3.549 7.287 8.46 9.754 13.36 2.739 5.44 5.483 11.136 10.847 14.844.65.449-.255 1.383-.904.935-9.332-6.45-10.678-18.114-18.093-25.927-3.46-3.645-8.262-6.288-14.027-5.863-5.04.372-9.776 2.612-14.479 4.34a35.977 35.977 0 01-15.045 2.468 48.263 48.263 0 01-15.01-3.816 103.579 103.579 0 01-28.398-17.67A96.835 96.835 0 01.058 513.228c-.343-.67.932-1.104 1.274-.438z"
              />
              <path
                fill="#fff"
                d="M42.77 555.102a20.135 20.135 0 01-22.638 5.755c-.748-.315-.137-1.412.613-1.097a18.64 18.64 0 0021.049-5.39c.526-.64 1.5.096.976.732zM77.94 561.294a27.076 27.076 0 00-11.645-18.878c-.647-.452.257-1.386.904-.935a28.152 28.152 0 0112.07 19.67c.093.752-1.238.891-1.33.143zM14.95 533.144a9.154 9.154 0 003.529-8.182c-.103-.75 1.227-.888 1.33-.143a10.249 10.249 0 01-3.883 9.058.76.76 0 01-.94.101.545.545 0 01-.037-.834z"
              />
              <path
                fill="#f2f2f2"
                d="M85.538 455.893c.079.465.158.93.248 1.4a101.686 101.686 0 005.02 18.29c.166.462.34.926.52 1.38a110.235 110.235 0 0025.284 38.165 115.864 115.864 0 0014.46 12.094c7.166 5.07 15.436 10.024 19.97 16.856a18.145 18.145 0 011.29 2.207L131.9 587.62c-.098.077-.186.158-.283.235l-.734 1.678c-.284-.172-.574-.356-.858-.527-.165-.1-.326-.207-.491-.306-.11-.069-.218-.138-.32-.194a1.642 1.642 0 01-.1-.066c-.102-.056-.19-.118-.283-.171q-2.436-1.534-4.854-3.106c-.01-.003-.01-.003-.016-.016-12.254-8.012-23.779-17.067-33.248-27.514-.285-.314-.58-.631-.855-.965a103.132 103.132 0 01-11.262-15.148 88.693 88.693 0 01-4.785-9.067 73.201 73.201 0 01-6.37-25.48c-1.154-17.643 4.08-35.886 17.092-50.009.333-.36.661-.713 1.005-1.07z"
              />
              <path
                fill="#fff"
                d="M86.06 456.175c-5.69 21.822-3.73 44.837 5.905 64.42a40.428 40.428 0 008.153 11.69 27.288 27.288 0 0012.913 6.606c4.618 1.093 9.529 1.722 13.675 3.824a14.416 14.416 0 017.768 10.535c1.014 5.47-.272 11.104-1.742 16.59-1.632 6.091-3.433 12.403-1.927 18.439.182.731-1.128 1.036-1.31.306-2.62-10.503 4.268-21.122 4.004-31.746-.122-4.957-1.929-9.788-6.532-12.535-4.025-2.403-9.088-3.055-13.778-4.125a29.572 29.572 0 01-12.936-6.018 37.745 37.745 0 01-8.654-11.33 88.277 88.277 0 01-9.3-30.298 97.483 97.483 0 012.512-36.673c.196-.754 1.445-.434 1.25.315z"
              />
              <path
                fill="#fff"
                d="M88.442 514.405c-8.404 2.633-17.32-.517-20.844-7.324-.347-.67.853-1.271 1.2-.6 3.302 6.377 11.553 9.238 19.409 6.776.827-.259 1.057.89.235 1.148zM110.582 538.618a28.747 28.747 0 004.061-22.29c-.18-.732 1.13-1.037 1.31-.306a29.922 29.922 0 01-4.278 23.192c-.44.687-1.53.088-1.093-.596zM82.477 480.781a11.295 11.295 0 008.181-5.037c.43-.691 1.52-.092 1.093.595a12.656 12.656 0 01-9.039 5.59c-.361.043-.699-.084-.772-.421a.658.658 0 01.537-.727z"
              />
              <path
                fill="#a0616a"
                d="M146.81 179.199l34.77 36.921 80.932 29.667 9.726-18.067-62.28-33.117s-28.079-29.336-44.737-35.38z"
              />
              <circle cx="270.912" cy="238.408" r="12" fill="#a0616a" />
              <path
                fill="#3f3d56"
                d="M173.791 161.276l-24.853 21.944-.117.03c-11.555 2.95-28.243-10.679-40.208-22.632a22.004 22.004 0 01-1.014-30.023 22.053 22.053 0 0122.305-6.666l20.2 5.572z"
              />
              <path
                fill="#a0616a"
                d="M201.586 597.14l17.128-.001 8.148-66.065-25.279.001.003 66.065z"
              />
              <path
                fill="#2f2e41"
                d="M197.216 591.548h4.821l18.823-7.655 10.088 7.653h.001a21.497 21.497 0 0121.496 21.496v.699l-55.228.002z"
              />
              <path
                fill="#a0616a"
                d="M125.586 597.14l17.128-.001 8.148-66.065-25.279.001.003 66.065z"
              />
              <path
                fill="#2f2e41"
                d="M121.216 591.548h4.821l18.823-7.655 10.088 7.653h.001a21.497 21.497 0 0121.496 21.496v.699l-55.228.002zM99.469 312.574s-2 24 3 47 5 87.776 5 87.776l11 126.224 33-3 9-211 32 71-3 10 3.996 2.5s-2.996 19.5-.996 19.5 7 3 7 3l-4 103 34-1 12-145-13-83-1-16-4.5.185-2.292-6.685-4.208-11.5z"
              />
              <path
                fill="#3f3d56"
                d="M97.74 317.615l-.178-.25c-9.518-13.326 4.797-45.349 6.957-49.99l-9.095-2.952 2.048-17.408.97-7.76-6.95-6.951-.02-.173-4-35-5.816-23.247a51.037 51.037 0 0114.486-49.46l13.443-12.676 16.338-24.174h26.347l9.034 17.063a38.401 38.401 0 0129.712 39.207l-2.048 44.753 8.015 55.72.005 10.085 9.02 10.024-1.97 9.848 6.865 2.942 3.032 14.145c1.254 1.655 9.534 12.695 9.534 15.713 0 .453-.335.891-1.052 1.377-5.643 3.82-36.83 11.61-50.634 6.087-14.703-5.879-73.15 2.94-73.739 3.03z"
              />
              <path
                fill="#ccc"
                d="M313.804 613.382a1.186 1.186 0 01-1.183 1.19H32.324a1.19 1.19 0 010-2.38h280.29a1.187 1.187 0 011.19 1.183z"
              />
              <circle cx="142.5" cy="44.877" r="34.893" fill="#a0616a" />
              <path
                fill="#2f2e41"
                d="M145.843 80.335a94.898 94.898 0 01-16.11-1.544c-5.262-1.213-16.873-10.191-20.038-15.495-2.35-3.941-3.762-10.037-4.532-14.456a42.421 42.421 0 018.286-33.475 13.402 13.402 0 015.531-4.479c.196-.07.397-.133.6-.185a16.536 16.536 0 008.355-4.876 13.64 13.64 0 011.403-1.372 20.369 20.369 0 018.605-4.046c5.085-1.221 12.36.309 21.62 4.552 4.652 2.132 9.815 1.537 13.795.78a1.296 1.296 0 011.209.45 9.145 9.145 0 006.15 2.637c1.412.099 2.846 2.096 4.574 4.697.392.59.85 1.279 1.182 1.7l.066-.79.777.903a11.097 11.097 0 01-5.475 17.944 21.64 21.64 0 01-4.369.581c-.892.057-1.816.116-2.702.247a16.731 16.731 0 00-12.71 10.532 4.376 4.376 0 01-6.656 1.953 7.23 7.23 0 00-6.554-1.369 4.799 4.799 0 00-2.183 2.35 6.254 6.254 0 01-2.444 2.707c-3.633 1.756-4.091 9.938-2.98 16.798 1.071 6.612 3.402 11.435 5.668 11.729 1.744.226 1.94.355 2.06.668l.105.28-.203.254c-.198.226-1.353.325-3.03.325z"
              />
              <circle cx="317.016" cy="283.09" r="61.789" fill="#0bbfae" />
              <path
                fill="#fff"
                d="M311.622 307.307c-.134 0-.269-.003-.404-.01a8.23 8.23 0 01-6.099-3.17l-9.738-12.519a8.245 8.245 0 011.443-11.558l.349-.272a8.25 8.25 0 0111.562 1.442 4.94 4.94 0 003.662 1.903 4.846 4.846 0 003.83-1.536L336 260.714a8.247 8.247 0 0111.644-.315l.321.304a8.246 8.246 0 01.317 11.645l-30.684 32.387a8.223 8.223 0 01-5.976 2.572z"
              />
              <path
                fill="#a0616a"
                d="M153.88 180.482l24.24 44.55 70.726 49.271 14-15-51.81-47.865s-19.696-35.512-34.27-45.592z"
              />
              <circle cx="258.846" cy="269.303" r="12" fill="#a0616a" />
              <path
                fill="#3f3d56"
                d="M156.062 186.42l-15.243-36.582 5.513-20.217a22.055 22.055 0 0117.114-15.782 22.003 22.003 0 0125.305 16.19c4.175 16.39 7.38 37.696-1.051 46.128l-.086.085z"
              />
              <path
                fill="#fff"
                d="M496.026 113.195c-.055 0-.11-.001-.166-.004a3.386 3.386 0 01-2.51-1.304l-4.006-5.15a3.392 3.392 0 01.594-4.755l.143-.112a3.394 3.394 0 014.757.593 2.032 2.032 0 001.506.783 1.994 1.994 0 001.576-.632l8.135-8.587a3.393 3.393 0 014.79-.13l.132.125a3.392 3.392 0 01.13 4.791l-12.623 13.324a3.383 3.383 0 01-2.458 1.058z"
              />
              <path
                fill="#e6e7e8"
                d="M686.963 489.611c7.15 4.853 15.096 10.314 17.4 19.171a14.569 14.569 0 01-1.484 11.336c-1.835 3.058-4.568 5.46-7.235 7.775-3.167 2.751-6.36 5.454-8.817 8.889-1.125 1.572 1.476 3.072 2.59 1.514 4.557-6.367 12.128-9.974 16.137-16.806 4.742-8.081 1.578-17.665-4.299-24.206-3.667-4.083-8.266-7.2-12.778-10.263-1.602-1.087-3.104 1.51-1.514 2.59zM711.963 489.611c7.15 4.853 15.096 10.314 17.4 19.171a14.569 14.569 0 01-1.484 11.336c-1.835 3.058-4.568 5.46-7.234 7.775-3.168 2.751-6.36 5.454-8.818 8.889-1.125 1.572 1.476 3.072 2.59 1.514 4.557-6.367 12.128-9.974 16.137-16.806 4.742-8.081 1.578-17.665-4.299-24.206-3.667-4.083-8.266-7.2-12.778-10.263-1.601-1.087-3.104 1.51-1.514 2.59zM473.994 269.765c1.59-1.08.087-3.677-1.514-2.59-4.513 3.063-9.111 6.18-12.778 10.263-5.877 6.542-9.041 16.125-4.3 24.206 4.01 6.832 11.581 10.439 16.137 16.806 1.115 1.558 3.716.059 2.59-1.514-2.457-3.435-5.65-6.138-8.817-8.888-2.666-2.316-5.4-4.718-7.234-7.776a14.569 14.569 0 01-1.484-11.336c2.304-8.857 10.25-14.318 17.4-19.17zM448.994 269.765c1.59-1.08.087-3.677-1.514-2.59-4.513 3.063-9.111 6.18-12.778 10.263-5.877 6.542-9.041 16.125-4.3 24.206 4.01 6.832 11.581 10.439 16.137 16.806 1.115 1.558 3.716.059 2.59-1.514-2.457-3.435-5.65-6.138-8.817-8.888-2.666-2.316-5.4-4.718-7.234-7.776a14.569 14.569 0 01-1.484-11.336c2.304-8.857 10.25-14.318 17.4-19.17z"
              />
            </svg>
            <svg
              width="50%"
              height="50%"
              data-name="Layer 1"
              viewBox="0 0 650.114 477.612"
            >
              <path
                fill="#e6e6e6"
                d="M172.683 352.734C77.465 352.734 0 275.27 0 180.052S77.465 7.369 172.683 7.369a173.062 173.062 0 01141.16 73.193l-1.633 1.155A171.058 171.058 0 00172.683 9.369C78.568 9.369 2 85.937 2 180.052s76.568 170.682 170.683 170.682a169.588 169.588 0 00135.496-66.872l1.586 1.217a171.569 171.569 0 01-137.082 67.655z"
              />
              <path
                fill="#e6e6e6"
                d="M244.072 151.134a9.572 9.572 0 119.572-9.572 9.572 9.572 0 01-9.572 9.572z"
              />
              <path
                fill="#fff"
                d="M247.41 143.565l-2.002-2.003 2.003-2.003a.944.944 0 10-1.336-1.335l-2.003 2.003-2.003-2.003a.944.944 0 00-1.335 1.335l2.003 2.003-2.003 2.003a.944.944 0 001.335 1.335l2.003-2.003 2.003 2.003a.944.944 0 101.336-1.335z"
              />
              <circle cx="196.468" cy="19.049" r="19.049" fill="#e6e6e6" />
              <path
                fill="#fff"
                d="M193.87 28.963a2.118 2.118 0 01-1.696-.848l-5.196-6.93a2.119 2.119 0 113.39-2.542l3.4 4.533 8.732-13.098a2.119 2.119 0 013.526 2.35L195.633 28.02a2.12 2.12 0 01-1.705.943z"
              />
              <rect
                width="55.946"
                height="11.963"
                x="168.915"
                y="53.414"
                fill="#e6e6e6"
                rx="5.07"
              />
              <rect
                width="112.773"
                height="11.963"
                x="140.502"
                y="77.341"
                fill="#e6e6e6"
                rx="5.07"
              />
              <rect
                width="112.773"
                height="11.963"
                x="140.502"
                y="101.268"
                fill="#e6e6e6"
                rx="5.07"
              />
              <path
                fill="#e6e6e6"
                d="M185.779 356.381a9.572 9.572 0 119.572-9.572 9.572 9.572 0 01-9.572 9.572z"
              />
              <path
                fill="#fff"
                d="M189.117 348.812l-2.003-2.003 2.003-2.003a.944.944 0 00-1.335-1.335l-2.003 2.003-2.003-2.003a.944.944 0 00-1.335 1.335l2.003 2.003-2.003 2.003a.944.944 0 101.335 1.336l2.003-2.003 2.003 2.003a.944.944 0 101.335-1.336z"
              />
              <circle cx="138.175" cy="224.296" r="19.049" fill="#e6e6e6" />
              <path
                fill="#fff"
                d="M135.576 234.21a2.118 2.118 0 01-1.695-.848l-5.197-6.929a2.119 2.119 0 113.39-2.542l3.4 4.533 8.733-13.099a2.119 2.119 0 113.526 2.351l-10.394 15.59a2.12 2.12 0 01-1.704.943z"
              />
              <rect
                width="55.946"
                height="11.963"
                x="110.622"
                y="258.662"
                fill="#e6e6e6"
                rx="5.07"
              />
              <rect
                width="112.773"
                height="11.963"
                x="82.209"
                y="282.589"
                fill="#e6e6e6"
                rx="5.07"
              />
              <rect
                width="112.773"
                height="11.963"
                x="82.209"
                y="306.516"
                fill="#e6e6e6"
                rx="5.07"
              />
              <path
                fill="#e6e6e6"
                d="M383.79 315.541a13.218 13.218 0 1113.218-13.218 13.218 13.218 0 01-13.219 13.218z"
              />
              <path
                fill="#fff"
                d="M388.4 305.09l-2.767-2.767 2.766-2.765a1.304 1.304 0 00-1.844-1.844l-2.766 2.766-2.766-2.766a1.304 1.304 0 00-1.844 1.844l2.766 2.765-2.766 2.766a1.304 1.304 0 001.844 1.844l2.766-2.765 2.766 2.765a1.304 1.304 0 001.844-1.844z"
              />
              <circle cx="326.199" cy="133.144" r="26.305" fill="#0bbfae" />
              <path
                fill="#fff"
                d="M322.61 146.835a2.925 2.925 0 01-2.34-1.171l-7.176-9.568a2.926 2.926 0 114.682-3.511l4.695 6.259 12.058-18.087a2.926 2.926 0 114.87 3.246l-14.353 21.529a2.927 2.927 0 01-2.354 1.302h-.081z"
              />
              <rect
                width="77.257"
                height="16.52"
                x="288.152"
                y="180.6"
                fill="#3f3d56"
                rx="5.07"
              />
              <rect
                width="155.729"
                height="16.52"
                x="248.916"
                y="213.641"
                fill="#3f3d56"
                rx="5.07"
              />
              <rect
                width="155.729"
                height="16.52"
                x="248.916"
                y="246.682"
                fill="#3f3d56"
                rx="5.07"
              />
              <path
                fill="#ffb6b6"
                d="M450.676 463.637l-12.756-.001-6.069-49.203 18.828.001-.003 49.203z"
              />
              <path
                fill="#2f2e41"
                d="M450.336 459.47l-13.62-5.54-.39-.16-7.52 5.7a16.013 16.013 0 00-16.01 16.01v.52h41.13v-16.53z"
              />
              <path
                fill="#ffb6b6"
                d="M558.496 452.952l-12.182 3.785-20.398-45.186 17.98-5.586 14.6 46.987z"
              />
              <path
                fill="#2f2e41"
                d="M556.934 449.074l-14.65-1.248-.42-.037-5.49 7.675a16.013 16.013 0 00-10.537 20.04l.154.496 39.277-12.206-4.906-15.785zM507.456 211.586l5.188 14.756v7.976l-.723 8.771 8.03 29.254 6.3 64.508 31.7 95.492-24.307 7-62.06-156.024-19.601 157.813-22.229-.593s-3.803-9.196-2.803-14.196 1 1 1-5-4.335-3.394-1.167-8.197 2.773-9.008 2.97-11.906-1.803-119.897-1.803-123.897-.692-3.124-.346-7.062 4.741-2.32 3.544-9.129-1.592-5.62-1.395-10.714 2.953-34.97 2.953-34.97z"
              />
              <path
                fill="#ffb8b8"
                d="M424.262 216.386l44.563-42.975 12.35-34.972-18.218-7.922c-9.357 8.964-19.473 36.884-19.473 36.884l-30.665 39.013a8.85 8.85 0 00-.712.273 8.775 8.775 0 1012.155 9.7z"
              />
              <path
                fill="#0bbfae"
                d="M457.831 134.422l23.109 7.336.087-.014c8.6-1.441 15.738-15.489 20.21-27.02a16.091 16.091 0 00-8.193-20.383 16.127 16.127 0 00-16.89 2.13l-11.866 9.697z"
              />
              <path
                fill="#0bbfae"
                d="M511.382 230.542l.135-.18c7.21-9.562-2.65-33.242-4.142-36.676l6.704-1.986-1.168-12.765-.563-5.691 5.212-4.95.018-.127 3.585-25.51 4.69-16.885a37.322 37.322 0 00-9.656-36.431l-9.589-9.52-11.487-17.981-19.26-.497-6.927 12.303a28.082 28.082 0 00-22.46 28.101l.652 32.755-6.911 40.583-.194 7.372-6.784 7.158 1.255 7.236-5.074 2.021-2.483 10.284c-.949 1.186-7.21 9.1-7.267 11.307-.008.331.228.657.743 1.026 4.053 2.9 26.706 9.183 36.9 5.406 10.86-4.02 53.421 3.53 53.85 3.607z"
              />
              <path
                fill="#ffb8b8"
                d="M464.167 126.707l-9.838-19.615c-14.28.976-42.624 17.488-42.624 17.488l-53.626 11.37a9.688 9.688 0 102.641 16.555l68.216-4.89z"
              />
              <path
                fill="#0bbfae"
                d="M460.2 129.928l25.694-19.095 4.526-16.31a17.816 17.816 0 00-5.358-18.026 17.773 17.773 0 00-24.254.782c-9.67 9.652-20.698 23.116-18.329 32.453l.024.095z"
              />
              <circle cx="486.125" cy="34.035" r="22.849" fill="#ffb8b8" />
              <path
                fill="#2f2e41"
                d="M501.161 57.931c-3.822-1.795-8.285-.704-12.504-.538s-9.331-1.424-10.227-5.55c-.661-3.052 1.328-6.396.074-9.255-1.367-3.118-5.47-3.562-8.761-4.435a20.197 20.197 0 01-14.584-18.906c-.23 1.703 2.686 2.263 3.644.835s.298-3.403-.758-4.76-2.481-2.44-3.277-3.963-.641-3.786.913-4.519a12.696 12.696 0 008.042 6.615c-.707-2.148.292-4.563 1.902-6.152a18.412 18.412 0 015.81-3.422c5.268-2.283 11.417-4.555 16.518-1.921a9.877 9.877 0 015.106 6.911c9.434.798 19.123 11.018 18.585 20.472-.578 10.176-1 11-9.471 28.125"
              />
              <path
                fill="#f0f0f0"
                d="M615.62 476.587h-33.187l-.142-.259a36.166 36.166 0 01-1.217-2.423c-3.419-7.318-4.863-15.688-6.138-23.073l-.96-5.567a3.437 3.437 0 015.41-3.362q7.565 5.505 15.136 11c1.911 1.39 4.094 3 6.184 4.738.202-.98.413-1.961.624-2.93a3.44 3.44 0 016.28-1.086l3.883 6.238c2.832 4.556 5.332 9.045 4.823 13.887a.756.756 0 01-.014.176 10.947 10.947 0 01-.563 2.33z"
              />
              <path
                fill="#cacaca"
                d="M648.93 477.305l-315.358.307a1.19 1.19 0 010-2.381l315.357-.308a1.19 1.19 0 010 2.382z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainHome
