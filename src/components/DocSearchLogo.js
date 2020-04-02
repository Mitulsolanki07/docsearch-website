import React from 'react';

export function DocSearchLogo(props) {
  const { big = false } = props;
  return (
    <svg
      width={big ? (big === true ? big : '50%') : '190'}
      viewBox="0 0 476 78"
      className="docsearch-logo"
      style={big === true ? { maxWidth: '190px', minWidth: '150px' } : {}}
    >
      <g fill-rule="nonzero" fill="none">
        <path
          d="M36.493 77.289h-33.419c-1.698 0-3.074-1.37-3.074-3.061h36.523c12.769.062 24.6-6.663 31.038-17.642 6.438-10.979 6.504-24.543.174-35.584-6.331-11.041-18.096-17.88-30.865-17.942h-36.87c0-1.69 1.376-3.061 3.074-3.061h33.796c10.31.01 20.193 4.1 27.472 11.369 7.28 7.268 11.36 17.12 11.341 27.384-.059 21.366-17.741 38.536-39.191 38.536z"
          fill="#5468FF"
        />
        <path
          d="M0 69.045h23.711c2.932.01 5.761-1.071 7.933-3.031h-31.644v3.031zM0 60.801h36.374c.734-.987 1.418-1.975 2.053-3.071h-38.427v3.071zM0 52.546h41.025c.407-.987.773-1.975 1.091-3.061h-42.116v3.061zM0 44.302h43.306c.149-.987.268-2.034.337-3.061h-43.643v3.061zM0 36.058h43.633c-.069-1.037-.188-2.064-.337-3.071h-43.296v3.071zM0 27.804h42.116c-.317-1.037-.684-2.064-1.091-3.061h-41.025v3.061zM0 19.559h38.427c-.631-1.055-1.316-2.076-2.053-3.061h-36.374v3.061zM0 8.244v3.071h31.674c-2.171-1.962-5.001-3.043-7.933-3.031l-23.741-.039zM135.68 50.078c-1.822 3.303-4.582 5.999-7.933 7.751-3.767 1.931-7.962 2.888-12.197 2.784h-16.581v-43.69h16.571c4.239-.11 8.44.826 12.227 2.725 3.351 1.711 6.114 4.379 7.933 7.662 1.892 3.487 2.846 7.402 2.767 11.364.07 3.976-.889 7.904-2.787 11.404zm-11.414-2.192c2.294-2.179 3.441-5.249 3.441-9.212s-1.147-7.03-3.441-9.202c-2.301-2.185-5.52-3.278-9.659-3.278h-5.018v24.96h5.018c4.145 0 7.365-1.089 9.659-3.268zM175.456 19.125c3.323 1.888 6.066 4.643 7.933 7.968 1.975 3.518 2.981 7.493 2.916 11.522.053 4.045-.973 8.032-2.975 11.552-1.891 3.344-4.661 6.112-8.013 8.007-6.972 3.83-15.43 3.83-22.402 0-3.351-1.893-6.118-4.662-8.003-8.007-2.008-3.518-3.035-7.506-2.975-11.552-.061-4.036.967-8.015 2.975-11.522 1.894-3.328 4.66-6.082 8.003-7.968 6.996-3.831 15.475-3.831 22.471 0h.069zm-19.556 10.318c-2.043 2.245-3.068 5.302-3.074 9.172-.007 3.87 1.018 6.918 3.074 9.143 4.576 4.529 11.965 4.529 16.541 0 2.056-2.258 3.084-5.305 3.084-9.143 0-3.837-1.025-6.885-3.074-9.143-4.595-4.511-11.976-4.511-16.571 0l.02-.03zM225.108 20.882c3.7 2.991 6.218 7.187 7.11 11.848h-11.226c-.762-1.928-2.093-3.58-3.818-4.739-1.812-1.184-3.942-1.79-6.109-1.738-2.895-.102-5.673 1.143-7.517 3.367-1.904 2.258-2.856 5.286-2.856 9.084s.952 6.813 2.856 9.044c1.846 2.222 4.623 3.465 7.517 3.367 2.161.068 4.292-.521 6.109-1.688 1.714-1.149 3.044-2.782 3.818-4.69h11.236c-.901 4.657-3.418 8.851-7.11 11.848-3.656 2.942-8.284 4.417-13.883 4.423-3.928.086-7.807-.887-11.226-2.814-3.21-1.857-5.81-4.601-7.487-7.899-1.805-3.582-2.71-7.546-2.638-11.552-.073-4.01.832-7.977 2.638-11.562 1.677-3.298 4.277-6.042 7.487-7.899 3.419-1.915 7.294-2.877 11.216-2.784 5.606 0 10.234 1.461 13.883 4.384zM267.006 54.679c-1.26 2.01-3.069 3.62-5.216 4.641-2.61 1.216-5.469 1.808-8.35 1.728-4.919 0-8.971-1.195-12.158-3.584-3.182-2.37-5.103-6.057-5.216-10.012h11.295c.082 1.47.712 2.857 1.765 3.89 1.055.962 2.448 1.473 3.877 1.422 1.182.068 2.343-.329 3.233-1.106.794-.779 1.222-1.853 1.18-2.962.027-1.033-.366-2.034-1.091-2.774-.769-.78-1.686-1.401-2.697-1.827-1.071-.474-2.568-.987-4.472-1.698-2.324-.765-4.593-1.686-6.793-2.755-1.81-.931-3.366-2.286-4.532-3.949-1.339-2.022-2.002-4.413-1.894-6.832-.062-2.396.631-4.751 1.983-6.734 1.381-1.944 3.29-3.454 5.504-4.354 2.545-1.048 5.279-1.563 8.032-1.511 4.879 0 8.756 1.152 11.632 3.456 2.898 2.349 4.669 5.803 4.879 9.518h-11.483c-.138-1.287-.695-2.494-1.587-3.436-.925-.872-2.169-1.328-3.441-1.264-1.078-.036-2.134.314-2.975.987-.799.748-1.218 1.814-1.14 2.903-.032.972.325 1.916.992 2.626.731.757 1.608 1.358 2.578 1.767 1.031.454 2.519 1.03 4.463 1.728 2.366.761 4.67 1.702 6.892 2.814 1.83.97 3.403 2.357 4.591 4.048 1.36 2.043 2.033 4.463 1.924 6.911.015 2.243-.599 4.445-1.775 6.358zM285.263 25.325v9.153h14.875v7.978h-14.875v9.706h16.69v8.462h-27.261v-43.7h27.301v8.402zM335.015 52.645h-16.442l-2.737 7.968h-11.166l16.075-43.374h12.227l16.095 43.374h-11.315l-2.737-7.968zm-2.727-8.037l-5.464-16.064-5.524 16.064h10.988zM374.85 60.613l-9.5-16.498h-2.4v16.498h-10.611v-43.69h18.128c3.042-.08 6.061.549 8.816 1.836 2.258 1.069 4.141 2.789 5.405 4.937 1.223 2.179 1.842 4.643 1.795 7.138.088 2.921-.844 5.783-2.638 8.096-1.967 2.326-4.67 3.917-7.666 4.512l10.432 17.18-11.761-.01zm-11.9-23.696h6.585c1.672.149 3.339-.342 4.661-1.372 1.058-1.098 1.598-2.59 1.488-4.107.084-1.51-.465-2.987-1.517-4.078-1.284-1.081-2.945-1.613-4.621-1.481h-6.595v11.038zM424.81 20.882c3.703 2.988 6.222 7.186 7.11 11.848h-11.236c-.755-1.937-2.087-3.598-3.818-4.759-1.811-1.185-3.942-1.791-6.109-1.738-2.896-.1-5.673 1.153-7.507 3.387-1.904 2.258-2.856 5.286-2.856 9.084s.952 6.813 2.856 9.044c1.841 2.223 4.615 3.467 7.507 3.367 2.165.057 4.297-.546 6.109-1.728 1.717-1.146 3.047-2.78 3.818-4.69h11.236c-.897 4.659-3.415 8.854-7.11 11.848-3.656 2.942-8.284 4.417-13.883 4.423-3.931.087-7.814-.885-11.236-2.814-3.209-1.855-5.807-4.599-7.477-7.899-1.808-3.58-2.713-7.545-2.638-11.552-.077-4.01.828-7.978 2.638-11.562 1.67-3.299 4.268-6.044 7.477-7.899 3.423-1.926 7.305-2.894 11.236-2.804 5.6.039 10.227 1.521 13.883 4.443zM475.167 16.923v43.69h-10.68v-18.226h-16.63v18.226h-10.611v-43.69h10.611v16.933h16.63v-16.933z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
