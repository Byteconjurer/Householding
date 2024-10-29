import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChickenSvg: React.FC = () => (
  <Svg width="30" height="30" viewBox="0 0 200 200">
    <Path
      fill="#E7990E"
      d="M99 10c10.444 7.368 14.089 20.517 16.387 32.484 1 6.254.539 12.258-.387 18.516l1.71-.48c7.942-1.803 15.264-.564 22.29 3.48 5.52 4.039 9.036 9.3 12.438 15.125l1.037 1.775c2.036 3.68 3.074 6.924 3.525 11.1-3.944 1.017-6.954.9-10.957.223l-3.37-.557-3.486-.603-3.544-.592c-2.883-.483-5.763-.973-8.643-1.471l.487 1.833c2.184 9.228.573 18.87-4.116 26.987-4.411 6.541-9.413 11.39-16.371 15.18h-2c.757 2.15 1.53 4.296 2.313 6.438l1.3 3.62L109 146c4.159 1.386 8.222.975 12.55.785 4.984-.108 4.984-.108 7.434 1.59C130 150 130 150 129.75 152.125 129 154 129 154 128 155c-2.64-.065-5.242-.192-7.875-.375l-2.223-.133c-3.158-.207-5.887-.487-8.902-1.492l-1 4c-2.875.125-2.875.125-6 0l-2-2c-1.905-.244-1.905-.244-4.063-.125l-2.414.047L91 155c-1.646.05-3.291.093-4.938.125l-2.214.07C82 155 82 155 80 153c.25-2.563.25-2.563 1-5 2.765-1.382 5.046-1.095 8.125-1.063l3.32.028L95 147l1-10-4.25 1c-10.557 2.067-19.467.938-29.75-2l1 11 2.52-.105 3.293-.083 3.269-.105C75 147 75 147 76.887 148.512L78 150c-1.875 3.875-1.875 3.875-3 5-3.83.026-7.647-.03-11.475-.127l-2.427-.033-2.234-.051c-2.111.043-2.111.043-3.864 2.211-2.625.125-2.625.125-5 0l-2-4-2.16.438C35.059 155.526 35.059 155.526 30 155c-1.938-1.5-1.938-1.5-3-3 1.75-3.875 1.75-3.875 4-5 3.543-.031 7.075.068 10.617.16 4.072-.13 4.072-.13 7.383-2.16 1.575-3.077 1.575-3.077 2.75-6.625l1.297-3.602L54 132l-2.25-.797c-8.295-3.629-15.523-12.057-19.031-20.289C31.224 104.855 30.175 94.65 33 89l-1.8.26a19688.281 19688.281 0 0 1-11.032 1.586c-1.849.265-3.698.527-5.547.786-1.675.235-3.35.476-5.023.724-5.373.757-5.373.757-7.598-.356 1.405-10.92 8.126-19.62 16-27 6.59-4.884 13.02-5.54 21-5 3.625 1 3.625 1 6 2l-1-3.375c-3.065-12.91.393-27.955 6.875-39.438C61.853 3.166 82.665.195 99 10Z"
    />
    <Path
      fill="#F9E049"
      d="M115 68c5.423 4.454 7.93 10.845 8.75 17.688.102 1.436.187 2.873.25 4.312l.188 3.188c-.397 5.953-2.517 9.65-6.563 13.937l-2.336 2.508C104.955 120.319 104.955 120.319 99 121l2.25-2.188c2.443-2.498 4.618-5.048 6.75-7.812-2.79-1.105-2.79-1.105-5-1-1.67.993-3.337 1.994-5 3l-2.688 1c-2.63.89-2.63.89-4.312 4-2.624.985-5.245 1.422-8 2l-1-3-3.438.5C75 118 75 118 74 118l-1.813.625c-2.729.468-3.866-.216-6.187-1.625-.226 2.124-.226 2.124 1.5 3.625L69 122c-4.249-.472-6.088-.967-9-4-3.1-1.2-3.1-1.2-6-2v2l2 2c-2.962-.613-4.38-1.254-7-3v-2l-3-1v-5h-2c-2.6-8.338-5.157-17.205-5-26 1.699-2.89 2.93-3.465 6-5 2 2 2 2 2 5h2l-1-6 2 2c2.07.412 4.157.732 6.25 1 5.225.674 10.007 1.629 14.75 4 1.83.203 3.664.365 5.5.5 5.278.389 5.278.389 7.5 1.5l1.063-1.438C87.84 82.323 90.5 82.422 94 82c2.61-.894 2.61-.894 5-2l2.32-.781c3.226-1.468 5.343-3.368 7.93-5.781l2.64-2.442c1.57-1.484 1.57-1.484 3.11-2.996Z"
    />
    <Path
      fill="#FDDC47"
      d="M96.45 8.469c9.122 5.476 14.036 14.618 16.925 24.718 1.763 10.752 1.763 10.752-.555 14.95-4.948 6.215-11.961 11.297-19.972 12.23C90.2 60.374 87.63 60.275 85 60l.105-3.14c.029-1.37.056-2.74.082-4.11l.077-2.066c.046-3.149-.08-5.342-1.588-8.137-1.674-1.828-1.674-1.828-4.676-2.047-3.023.202-3.023.202-4.613 2.14-1.695 2.885-2.108 5.306-2.575 8.61l-.48 3.266L71 57c-2.417-.478-4.834-.957-7.25-1.438l-2.066-.408A959.73 959.73 0 0 1 56 54l-2.406-.438C52 53 52 53 50.75 50.438L50 48h-2c-.946-5.752-.96-9.448 1-15 .105-1.957.186-3.916.25-5.875.526-7.575 3.823-11.198 9-16.375 11.786-7.5 25.585-8.426 38.2-2.281Z"
    />
    <Path
      fill="#C06D11"
      d="M126 98h1c.65 9.958-2.652 17.58-8.668 25.438-3.586 3.94-7.654 7.014-12.332 9.562h-2c.757 2.15 1.53 4.296 2.313 6.438l1.3 3.62L109 146c4.159 1.386 8.222.975 12.55.785 4.984-.108 4.984-.108 7.434 1.59C130 150 130 150 129.75 152.125 129 154 129 154 128 155c-2.64-.065-5.242-.192-7.875-.375l-2.223-.133c-3.158-.207-5.887-.487-8.902-1.492l-1 4c-2.875.125-2.875.125-6 0l-2-2c-1.905-.244-1.905-.244-4.063-.125-.796.015-1.593.03-2.414.047L91 155c-1.646.05-3.291.093-4.938.125l-2.214.07C82 155 82 155 80 153c.25-2.563.25-2.563 1-5 2.765-1.382 5.046-1.095 8.125-1.063l3.32.028L95 147l1-10-4.25 1c-10.557 2.067-19.467.938-29.75-2l1 11 2.52-.105 3.293-.083 3.269-.105C75 147 75 147 76.887 148.512L78 150c-1.875 3.875-1.875 3.875-3 5-3.83.026-7.647-.03-11.475-.127l-2.427-.033-2.234-.051c-2.111.043-2.111.043-3.864 2.211-2.625.125-2.625.125-5 0l-2-4-2.16.438C35.059 155.526 35.059 155.526 30 155c-1.938-1.5-1.938-1.5-3-3 1.75-3.875 1.75-3.875 4-5 3.543-.031 7.075.068 10.617.16 4.072-.13 4.072-.13 7.383-2.16 1.575-3.077 1.575-3.077 2.75-6.625l1.297-3.602L54 132l-2.25-.797c-8.813-3.855-15.393-12.418-19.035-21.078-.83-2.465-1.048-4.542-.715-7.125l3 1 .875 3.438c.72 3.647.72 3.647 3.313 4.874L42 113c6.64 1.631 6.64 1.631 8.883 3.934 9.141 8.922 26.044 7.136 37.867 7.066l3.984-.063C96 124 96 124 99 125c1.51-1.215 3.017-2.44 4.457-3.738C105 120 105 120 107.563 119c3.278-1.345 4.995-3.442 7.437-6 1.185-.92 2.373-1.837 3.563-2.75 4.031-3.362 5.697-7.387 7.437-12.25Z"
    />
    <Path
      fill="#F2B41D"
      d="M141.125 65.555c4.343 3.953 7.374 8.539 10.313 13.57l1.037 1.775c2.036 3.68 3.074 6.924 3.525 11.1-3.944 1.017-6.954.9-10.957.223l-3.37-.557c-1.15-.2-2.3-.398-3.486-.603l-3.544-.592c-2.883-.483-5.763-.973-8.643-1.471.095.59.19 1.179.29 1.786 1.003 7.14-.137 11.249-4.29 17.214-1.681 1.75-3.39 3.228-5.316 4.7-1.915 1.405-1.915 1.405-4.121 3.925-2.757 2.555-5.323 3.9-8.704 5.457-2.026.922-2.026.922-4.171 2.73L98 126l-3-1c-2.25-.046-4.5-.038-6.75 0-21.932.164-21.932.164-32.25-4v-2l-3-1 1-3c4.247 1.749 8.057 3.634 12 6h2l-3-2 1-3 1.813 1c2.24 1.208 2.24 1.208 5.187 1l-1-2 3.75.563c3.013.384 5.35.524 8.25-.563l-1 3c6.612-1.26 6.612-1.26 11-6 1.982-.937 3.982-1.64 6.059-2.34 2.088-.71 4.003-1.61 5.941-2.66v2l4-1c-1.448 3.444-3.277 5.361-6.125 7.75l-2.195 1.86L100 120c7.941-2.803 12.836-7.582 18-14l2.375-2.875c2.267-4.36 2.55-8.259 2.625-13.125l.04-2.223C122.706 80.75 119.348 75.053 116 69c-3.495 2.399-6.549 4.514-9.438 7.625C103.3 79.649 100.18 80.684 96 82l-3.188 1.188c-2.763.798-4.954.98-7.812.812l-1 3-2-1c-2.788-.275-5.575-.446-8.371-.621C71 85 71 85 68 83c-5.847-1.589-11.972-2.452-18-3l-1 1v2h-2l-2-4c-2.773 1.861-2.773 1.861-5 5-.228 3.363.436 6.467 1.125 9.75l.477 2.652c.484 4.133.484 4.133 2.398 7.598.04 1.666.043 3.334 0 5h2v5c-7.327-.6-7.327-.6-10-2.188-1.448-2.624-1.196-4.874-1-7.812l-3-1c-.741-9.14.56-16.88 5-25 3.772-3.58 6.94-3.76 12-4l3 2v2l1.723-.035 2.34-.028 2.285-.035C61 78 61 78 63.926 78.492c6.014.914 12.132.692 18.199.695l3.824.038 3.684.005 3.34.013c3.064-.246 5.259-.945 8.027-2.243l-1-2-2.777 1.973c-5.066 2.88-10.093 2.586-15.785 2.465l-3.216-.034C69.802 79.225 60.673 78.837 53 75v-2h-2v-2l2.063.875C56.334 73.128 59.623 74.068 63 75l3.14 1.04c9.173 2.283 21.532 2.927 29.958-1.845L98 73l2.246-1.133c4.973-2.532 8.916-5.543 12.93-9.414 7.805-6.217 20.771-2.15 27.949 3.102Z"
    />
    <Path
      fill="#FEFB89"
      d="M94 15c2 2 2 2 2 5l4 1v3a257.396 257.396 0 0 1-5 4c-4.552 4.362-4.552 4.362-6.438 10.188.363 2.33.745 4.559 1.438 6.812l7 2c-2 3-2 3-3.945 3.512l-2.18.175L87 51l-.586-1.68-.789-2.195-.773-2.18c-.79-2.127-.79-2.127-2.852-3.945-2.958-.5-2.958-.5-6 0-2.472 2.387-3.401 4.648-4 8-5.745 1.655-11.58 1.396-17.438.438C52 48 52 48 49.876 44.874c-1.049-4.644-.326-6.024 2.012-9.953 1.295-2.067 1.295-2.067 2.113-5.234 1.145-3.077 2.169-4.095 5-5.688h2c.24 3.433.369 5.416-1.5 8.375C57.322 36.186 57.578 38.638 58 43c.942 2.194.942 2.194 3 3 3.09.082 3.09.082 6-1 1.883-2.31 2.005-4.04 2.375-7-.461-3.692-1.509-4.724-4.375-7l-2-1c-.027-1.77-.046-3.542-.063-5.313l-.035-2.988C63 19 63 19 64 16c7.523-6.985 21.478-5.18 30-1Z"
    />
    <Path
      fill="#F6A10B"
      d="M132 69c6.847 2.328 13.357 7.996 16.813 14.313L150 86c2.05 1.853 2.05 1.853 4 3l-1 4-27-4 1 9c-1.64 6.24-5.254 10.835-10.316 14.7-1.915 1.405-1.915 1.405-4.121 3.925-2.757 2.555-5.323 3.9-8.704 5.457-2.026.922-2.026.922-4.171 2.73L98 126l-3-1c-2.25-.046-4.5-.038-6.75 0-21.932.164-21.932.164-32.25-4v-2l-3-1 1-3c4.247 1.749 8.057 3.634 12 6h2l-3-2 1-3 1.813 1c2.24 1.208 2.24 1.208 5.187 1l-1-2 3.75.563c3.013.384 5.35.524 8.25-.563l-1 3c6.612-1.26 6.612-1.26 11-6 1.982-.937 3.982-1.64 6.059-2.34 2.088-.71 4.003-1.61 5.941-2.66v2l4-1c-1.448 3.444-3.277 5.361-6.125 7.75l-2.195 1.86L100 120c7.941-2.803 12.836-7.582 18-14l2.375-2.875C123.85 96.443 123.581 88.258 122 81c-.481-1.266-1-2.518-1.563-3.75-1.381-3.124-1.741-4.901-1.437-8.25 3.923-1.962 8.786-.654 13 0Z"
    />
    <Path
      fill="#FCF260"
      d="M92 12c3.378 1.126 4.714 2.32 7 5v3h2c.794 1.874 1.585 3.75 2.375 5.625l1.336 3.164C108.75 38.852 108.75 38.852 108 44c-2.316 3.507-3.744 5.61-7.813 6.875L98 51v2l-5.957.684c-2.237.288-2.237.288-5.043 1.316v-4l9-3-2.875-1.25C88.98 44.429 88.98 44.429 88 41c-.563-2.75-.563-2.75 0-6 2.077-2.927 4.472-5.46 7-8l1.605-1.738C98 24 98 24 100 24v-3l-1.813-.188C96 20 96 20 94.688 17.563c-1.864-2.83-3.115-3.55-6.394-4.285C80.882 12.381 74.027 12.36 67 15l-3 1-1 14 5 2c2.34 3.509 2.413 4.87 2 9-1.125 2.813-1.125 2.813-3 5-2.938 1.063-2.938 1.063-6 1-2.375-1.438-2.375-1.438-4-4-.632-5.684-.118-8.194 3-13 .252-2.71.252-2.71 0-5l-2-1c1.04-6.238 1.04-6.238 3-9 9.56-6.512 20.129-6.487 31-3Z"
    />
    <Path
      fill="#9E4D1E"
      d="M54 132c2.352.599 4.686 1.27 7 2 1.284 2.569 1.33 4.766 1.563 7.625l.253 3.04L63 147l2.52-.105 3.293-.083 3.269-.105C75 147 75 147 76.887 148.512L78 150c-1.875 3.875-1.875 3.875-3 5-3.83.026-7.647-.03-11.475-.127l-2.427-.033-2.234-.051c-2.111.043-2.111.043-3.864 2.211-2.625.125-2.625.125-5 0l-2-4-2.16.438C35.059 155.526 35.059 155.526 30 155c-1.938-1.5-1.938-1.5-3-3 1.75-3.875 1.75-3.875 4-5 3.543-.031 7.075.068 10.617.16 4.072-.13 4.072-.13 7.383-2.16 1.575-3.077 1.575-3.077 2.75-6.625l1.297-3.602L54 132Z"
    />
    <Path
      fill="#E58102"
      d="M41 69c-2.19 6.72-4.563 13.365-7 20l-1.908.26-8.654 1.177-3.002.409C15.288 91.546 10.142 92.257 5 93c.875-4.75.875-4.75 2-7h2l.652-1.617c3.394-6.001 9.625-12.486 15.825-15.645C30.68 67.442 35.76 68.168 41 69Z"
    />
    <Path
      fill="#E58202"
      d="M132 69c6.847 2.328 13.357 7.996 16.813 14.313L150 86c2.05 1.853 2.05 1.853 4 3l-1 4-28-4-3-7.188-.95-2.235c-1.495-3.661-2.42-6.616-2.05-10.577 3.923-1.962 8.786-.654 13 0Z"
    />
    <Path
      fill="#9D4C24"
      d="M104 133c.49 1.39.49 1.39.988 2.809l1.325 3.629 1.3 3.62L109 146c4.159 1.386 8.222.975 12.55.785 4.984-.108 4.984-.108 7.434 1.59C130 150 130 150 129.75 152.125 129 154 129 154 128 155c-2.64-.065-5.242-.192-7.875-.375l-2.223-.133c-3.158-.207-5.887-.487-8.902-1.492l-1 4c-2.875.125-2.875.125-6 0l-2-2c-1.905-.244-1.905-.244-4.063-.125-.796.015-1.593.03-2.414.047L91 155c-1.646.05-3.291.093-4.938.125l-2.214.07C82 155 82 155 80 153c.25-2.563.25-2.563 1-5 2.765-1.382 5.046-1.095 8.125-1.063L95 147v-12c6.75-2 6.75-2 9-2Z"
    />
    <Path
      fill="#F1931F"
      d="M49 23h1c.21 5.885-.092 10.397-2 16-.17 3.008-.12 5.99 0 9h2l2 5 3.875.313C61.137 53.88 65.991 55.337 71 57l.078-2.45c.46-8.66.46-8.66 2.61-12.8C76 40 76 40 79 39.375 82 40 82 40 84.375 42c2.093 3.864 2.32 6.7 1.625 11-1.063 2.938-1.063 2.938-3 5-3.688.813-3.688.813-7 1l-3-4v6c-1.583.054-3.166.093-4.75.125l-2.672.07c-2.692-.204-4.277-.83-6.578-2.195l2-1v-2l-1.723.07c-5.223.122-9.32-.451-14.277-2.07h-2c-.819-9.989 1.476-21.951 6-31Z"
    />
    <Path
      fill="#D27D0D"
      d="M126 98h1c.448 7.175-.689 12.338-5.473 17.848-7.605 7.918-15.55 14.085-26.926 14.496a196.843 196.843 0 0 1-4.546-.059l-2.467-.037a526.864 526.864 0 0 1-5.118-.12c-2.596-.066-5.19-.083-7.786-.099-1.668-.036-3.336-.076-5.004-.119h-2.324c-6.078-.244-9.205-2.575-13.356-6.91l3-2c1.803.45 3.603.912 5.39 1.418 9.8 2.186 20.348 1.676 30.344 1.52C96 124 96 124 99 125c1.51-1.215 3.017-2.44 4.457-3.738C105 120 105 120 107.563 119c3.278-1.345 4.995-3.442 7.437-6 1.185-.92 2.373-1.837 3.563-2.75 4.031-3.362 5.697-7.387 7.437-12.25Z"
    />
    <Path
      fill="#F6B015"
      d="m104 108 2 1h3c0 3 0 3-1.39 4.684l-3.82 3.597c-1.908 1.746-1.908 1.746-3.665 4.156-3.377 2.483-7.07 2.04-11.125 1.563l-2-1a204.25 204.25 0 0 0-6.688.625c-5.773.456-9.47.641-14.312-2.625-.938-2.188-.938-2.188-1-4l2.313 1c2.678 1.174 2.678 1.174 5.687 1l-1-2 3.75.563c3.013.384 5.35.524 8.25-.563l-1 3c6.612-1.26 6.612-1.26 11-6 2.02-.92 4.045-1.62 6.16-2.29 2.047-.647 2.047-.647 3.84-2.71Z"
    />
    <Path
      fill="#F0BE24"
      d="M35 83h1v9l2-4 2-2 .621 3.684.816 4.754.409 2.431c.357 3.886.357 3.886 2.154 7.131.04 1.666.043 3.334 0 5h2v5c-7.327-.6-7.327-.6-10-2.188-1.448-2.624-1.196-4.874-1-7.812l-3-1c-.335-7.434-.139-13.199 3-20Z"
    />
    <Path
      fill="#C96B1B"
      d="M101 145c2.567.395 4.671.836 7 2 1.415.048 2.831.037 4.246-.008l2.537-.05c1.766-.045 3.532-.097 5.297-.157l2.541-.043 2.326-.067c2.603.412 3.49 1.239 5.053 3.325-.251 2.137-.46 3.46-2 5-2.64-.065-5.242-.192-7.875-.375l-2.223-.133c-3.158-.207-5.887-.487-8.902-1.492v2c-2.75.313-2.75.313-6 0-2.438-2.25-2.438-2.25-4-5 .188-2.257.395-3.395 2-5Z"
    />
    <Path
      fill="#F4C029"
      d="M49 23h1c.21 5.885-.092 10.397-2 16-.17 3.008-.12 5.99 0 9h2l2 5 3.875.313C61.137 53.88 65.991 55.337 71 57v-6h1l1 10-4.75.125-2.672.07c-2.692-.204-4.277-.83-6.578-2.195l2-1v-2l-1.723.07c-5.223.122-9.32-.451-14.277-2.07h-2c-.819-9.989 1.476-21.951 6-31Z"
    />
    <Path
      fill="#CA671B"
      d="m57 146 1 4-2-1 .063 2.438C56 154 56 154 55 155c-2.333.04-4.667.042-7 0v-2l-2.16.438C35.059 155.526 35.059 155.526 30 155c-1.938-1.5-1.938-1.5-3-3 1.75-3.875 1.75-3.875 4-5 2.208-.02 4.417.008 6.625.063 4.195.042 7.955.024 12-1.125 3.327-.925 4.256-.912 7.375.062Z"
    />
    <Path
      fill="#FCDE3F"
      d="m44 62-1 4c-1.789.09-1.789.09-3.613.184l-4.7.254-2.38.119-2.295.127-2.11.11c-2.124.162-2.124.162-4.902 1.206l-1 2-2.125.688C15.707 72.59 13.109 75.7 10 79c-.975.983-1.954 1.963-2.938 2.938L5 84c1.98-8.576 8.805-16.141 16-21 6.955-3.841 15.825-4.826 23-1Z"
    />
    <Path
      fill="#FDDF40"
      d="M136.61 62.602c6.241 3.65 10.713 9.27 14.39 15.398l-1 2-1.39-1.242-1.86-1.633-1.828-1.617c-1.898-1.49-3.76-2.459-5.922-3.508l-1.375-1.5c-4.169-3.848-10.099-3.874-15.5-4.125l-2.086-.117c-1.68-.093-3.36-.177-5.039-.258l-1-4c7.242-3.863 15.38-2.604 22.61.602Z"
    />
    <Path
      fill="#34322D"
      d="M67 31c2.547 2.208 2.949 3.6 3.375 6.938C69.941 41.48 69.326 43.285 67 46c-2.938 1.063-2.938 1.063-6 1-2.375-1.438-2.375-1.438-4-4-.816-4.072-.655-6.993 1.625-10.5 3.078-1.944 4.799-2.109 8.375-1.5Z"
    />
    <Path
      fill="#3F3D36"
      d="M93.938 30.5c3.062.5 3.062.5 5.437 2 2.277 3.503 2.448 6.433 1.625 10.5-1.688 2.563-1.688 2.563-4 4-2.983-.073-4.446-.545-6.75-2.438C87.715 41.395 87.68 39.002 88 35c1.562-3.297 2.311-3.883 5.938-4.5Z"
    />
    <Path
      fill="#F4C32D"
      d="M106 19c3.013 3.013 3.778 4.53 5.125 8.438l1.008 2.87c1.691 5.25 2.93 10.178 1.867 15.692-3.756 6.875-10.772 11.401-18 14-3.736.435-7.264.39-11 0l1-3 1.836-.008c6.502-.3 10.64-2.014 16.035-5.617C106 50 106 50 109 49c2.14-6.42.958-13.415 0-20h-2l-1-10Z"
    />
    <Path
      fill="#EF9F12"
      d="m37 67-1 2c-2.454.359-4.883.444-7.36.559-5.799.969-9.427 4.94-13.39 9.004l-1.496 1.498C11.04 82.778 11.04 82.778 9 86H7l-2 7-3-1c.162-6.473 3.75-9.601 8-14l1.926-2.184C19.264 67.801 26.386 66.402 37 67Z"
    />
    <Path
      fill="#E18C0B"
      d="M126 98h1c.125 6.625.125 6.625-1 10h-3l-.125 2.063c-1.591 5.342-4.753 8.697-9.543 11.496-4.605 2.193-8.164 3.75-13.332 3.441 3.22-3.495 5.651-5.26 10-7a140.693 140.693 0 0 0 5-5c1.185-.92 2.373-1.837 3.563-2.75 4.031-3.362 5.697-7.387 7.437-12.25Z"
    />
    <Path
      fill="#F9B015"
      d="m65 116 2.313 1c2.678 1.174 2.678 1.174 5.687 1l-1-2 3.75.563c3.013.384 5.35.524 8.25-.563l-1 3 1.828-.543c6.61-1.759 6.61-1.759 9.734-.082L96 120c-1.688 1.563-1.688 1.563-4 3l-2.215-.45c-3.395-.67-6.225-.308-9.66.075-5.71.461-9.334.606-14.125-2.625-.938-2.188-.938-2.188-1-4Z"
    />
    <Path
      fill="#E08A09"
      d="M62.39 122.453c9.253 1.94 19.086 1.703 28.506 1.422 1.702-.03 3.404.04 5.104.125l2 2c-3.53 1.088-6.807 1.13-10.488 1.133l-3.83.004-3.995-.012-3.958.012-3.842-.004-3.494-.004c-9.486-.361-9.486-.361-12.83-3.192L54 122c3.466-1.155 4.976-.469 8.39.453Z"
    />
    <Path
      fill="#FFEA4B"
      d="M95 11c3.286 2.67 5.52 4.682 6 9h-2l-1-3-3-2v-2c-10.262-2.346-21.533-4.488-31 1-3.417 2.278-3.797 3.384-5.188 7.125l-1.042 2.758L57 26c-1.346-4.038-.435-6.036 1-10 1.627-3.112 3.017-4.575 6.25-5.973C74.078 6.957 85.63 6.08 95 11Z"
    />
    <Path
      fill="#FCDC35"
      d="m112 69 2 1-2.188 1.688c-2.85 2.227-2.85 2.227-5.124 4.874-3.341 3.03-6.451 4.104-10.688 5.438l-3.188 1.188c-2.763.798-4.954.98-7.812.812l-1 3-2-1c-2.82-.274-5.64-.446-8.469-.621C71 85 71 85 69 83l24-1v-2c5.75-3 5.75-3 8-3l1-3a168.166 168.166 0 0 1 6-2c2.302-1.516 2.302-1.516 4-3Z"
    />
    <Path
      fill="#EDCA3A"
      d="m50 75 .375 1.938L51 79l2 1-4-1v4h-2l-2-4c-4.833 4.05-6.383 7.967-8 14-2-2-2-2-2.152-4.426.58-7.801.58-7.801 3.465-11.699C42.64 73.855 44.91 73.728 50 75Z"
    />
    <Path
      fill="#EDAA1A"
      d="M114 41h1c.375 6.376-.733 9.342-4.813 14.125C106.016 58.701 101.197 60.409 96 62l-3.563 1.25c-3.73.814-5.144.546-8.437-1.25l1-4v2c9.403-.036 16.888-2.43 23.988-8.777 2.91-3.175 4.743-5.783 5.012-10.223Z"
    />
    <Path
      fill="#F49A22"
      d="m82 40-2 15c-4-1-4-1-6.313-3.188C72 49 72 49 72.064 45.876 74.044 39.795 75.322 40 82 40Z"
    />
    <Path
      fill="#FCE347"
      d="m50 44 .625 1.938c1.223 2.34 1.223 2.34 4 2.687 3.615.402 7.114.472 10.75.438l3.773-.028L72 49l-1 8-10-2v-2l-7-1v-2l-3-1-1-5Z"
    />
    <Path
      fill="#A04C1B"
      d="M98 148v5c-11.203 2.48-11.203 2.48-16 2l-2-2v-4l7.875-.5 2.262-.145C95.773 148 95.773 148 98 148Z"
    />
    <Path
      fill="#E9A71F"
      d="M35 83h1l-.07 2.422c-.717 12.815-.717 12.815 3.508 24.371 1.818 1.405 3.314 1.82 5.562 2.207v2c-6.345-.599-6.345-.599-8.938-2.188-1.535-2.618-1.26-4.841-1.062-7.812l-3-1c-.335-7.434-.139-13.199 3-20Z"
    />
    <Path
      fill="#94431D"
      d="M96 136h3l-.07 2.336-.055 3.039-.07 3.023c-.077 2.765-.077 2.765 2.195 4.602l.813 2.563L103 154c2.548.894 2.548.894 5 1v2c-2.875.125-2.875.125-6 0l-2-2c-2.57-.648-2.57-.648-5-1l3-1v-5l-2 1a189.58 189.58 0 0 1-7.625.063l-2.14-.014c-1.745-.012-3.49-.03-5.235-.049 2-2 2-2 4.82-2.195l3.305.07 3.32.055L95 147l1-11Z"
    />
    <Path
      fill="#E9AC21"
      d="M123 83c3.405 5.108 4.535 10.004 3.543 16.012-1.187 4.347-3.344 7.79-6.543 10.988-2.49 1.245-3.41.777-6 0l1.715-1.582c5.089-5.107 7.19-8.57 7.344-15.82-.02-.858-.04-1.715-.059-2.598l.035-2.254c.023-1.582 0-3.164-.035-4.746Z"
    />
    <Path
      fill="#FEFD79"
      d="M73 12c7.695-.317 14.007-.43 21 3 2 2 2 2 2 5l4 1v3a95.035 95.035 0 0 1-5 4 177.475 177.475 0 0 0-4 4l-1-2 2.563-2.75c2.074-2.387 2.074-2.387 2.437-5.438-2.488-4.51-5.788-5.704-10.504-7.183C80.674 13.666 76.926 13.312 73 13v-1Z"
    />
    <Path
      fill="#666565"
      d="m91 31 6 2-1 9c-2.313.625-2.313.625-5 1l-3-2c-.459-3.518-.411-5.349 1.5-8.375L91 31Z"
    />
    <Path
      fill="#EB9408"
      d="m114 111 3 1c-2.61 3.76-5.146 5.883-9.191 8.023-2.726 1.472-5.243 3.246-7.809 4.977l-2 1-3-1c-2.395-.07-4.792-.084-7.188-.063l-3.855.028L81 125v-1l17-1v-2l2.938-1.063c4.29-1.791 7.544-4.597 11.046-7.609L114 111Z"
    />
    <Path
      fill="#F4BE2A"
      d="M106 19c3.013 3.013 3.778 4.53 5.125 8.438l1.008 2.87c1.694 5.26 2.65 10.15 1.867 15.692-2 2.563-2 2.563-4 4l1-3c.33-6.276-.598-11.89-2-18h-2l-1-10Z"
    />
    <Path
      fill="#4E4C45"
      d="M58 33c2.84 0 5.237.403 8 1-.875 7.875-.875 7.875-2 9-2.333.04-4.667.042-7 0-.125-7.75-.125-7.75 1-10Z"
    />
    <Path
      fill="#F3AC18"
      d="M44 62h1l.25 3.375c.329 3.683.329 3.683 2.813 5.063L50 71l-2.125-.25c-3.804.33-5.856 2.003-8.875 4.25l2-6h-4v-2l-15 2c1-2 1-2 4-3a73.19 73.19 0 0 1 4.012-.316l2.295-.127 2.38-.12 2.417-.13C39.069 65.2 41.034 65.1 43 65l1-3Z"
    />
    <Path
      fill="#FBCD34"
      d="m59 10 2 1-1.875 2.125C56.957 16.058 55.973 18.512 55 22h-2l-.148 1.758C52.404 28.439 51.702 32.575 50 37c-1.813-5.904-1.605-12.968 1.3-18.457 2.326-3.11 4.938-5.822 7.7-8.543Z"
    />
    <Path
      fill="#F7C529"
      d="M71 51h1l1 10-4.75.125-2.672.07c-2.692-.204-4.277-.83-6.578-2.195l2-1-1-2c-3.03-.658-3.03-.658-6-1v-1c6.166-.402 11.177 1.032 17 3v-6Z"
    />
    <Path
      fill="#E37F14"
      d="M129 148v3h-19l-1-3c1.875-.17 3.75-.336 5.625-.5l3.164-.281c8.492-.579 8.492-.579 11.211.781Z"
    />
    <Path
      fill="#FBF675"
      d="M87 39c3 3.75 3 3.75 3 6l7 2c-2 3-2 3-3.945 3.512l-2.18.175L87 51c-.39-1.433-.762-2.872-1.125-4.313l-.633-2.425C85 42 85 42 87 39Z"
    />
    <Path
      fill="#F5B81F"
      d="m113 62 2 4h15v1l-2.379.113c-7.2.45-12.944.967-18.746 5.575-2.403 1.682-4.006 1.551-6.875 1.312 2.557-2.046 5.101-4.074 7.75-6 2.325-2.066 2.925-2.969 3.25-6Z"
    />
    <Path
      fill="#EF9D10"
      d="M124.625 66.75c9.677.118 9.677.118 14.375 3.25 2.23 2.53 4.166 5.172 6 8-2.78-1.277-4.35-2.333-6.625-4.5-5.225-4.496-12.736-4.85-19.375-4.5l-1 3c-.563-1.938-.563-1.938-1-4 1.9-1.9 5.093-1.218 7.625-1.25Z"
    />
    <Path
      fill="#E9AB26"
      d="M45 35h1l.148 2.668.227 3.52c.07 1.148.14 2.297.21 3.48.396 3.176.903 5.519 2.415 8.332l3 1c-3.478 1.16-5.459.708-9 0-.25-6.65.26-12.57 2-19Z"
    />
    <Path
      fill="#AB5525"
      d="m72 49 2.25 2.438c2.484 2.516 2.484 2.516 4.75 3.687 2.361.058 2.361.058 4.75-2.563L86 50c-.484 5.447-.484 5.447-2.75 7.875-2.801 1.4-4.17 1.818-7.25 1.125-3.032-3.606-4-5.23-4-10Z"
    />
    <Path
      fill="#F7DA44"
      d="M86 47h1v8l3-2c3.137-.414 3.137-.414 6.688-.625l3.574-.227L103 52c-4.941 5.436-9.966 5.445-17 6V47Z"
    />
    <Path
      fill="#F9CA2F"
      d="m23 68-1 2-2.125.688C15.707 72.59 13.109 75.7 10 79c-.975.983-1.954 1.963-2.938 2.938L5 84c1.341-5.962 4.566-9.958 9-14 5.79-3.605 5.79-3.605 9-2Z"
    />
    <Path
      fill="#FCD632"
      d="M103 18h3c.575 3.735 1 7.213 1 11h2l2 10h-2c-5.556-13.449-5.556-13.449-6-21Z"
    />
    <Path
      fill="#D78918"
      d="M55.188 145.313 57 146l1 4-2-1v5h-6c-.363-5.438-.363-5.438 1.25-7.938C53 145 53 145 55.188 145.313Z"
    />
    <Path fill="#F29216" d="m29 148 19 1-1 2H28l1-3Z" />
    <Path
      fill="#F9CB30"
      d="M115 65c18.104-.809 18.104-.809 26 4 1.02.98 2.023 1.978 3 3l2 1-1 3c-5.696-3.67-5.696-3.67-7.5-5.625-4.103-3.761-10.083-3.754-15.375-4l-2.086-.117c-1.68-.093-3.36-.177-5.039-.258v-1Z"
    />
    <Path
      fill="#C7681B"
      d="M81 150h16v2c-2.884 1.442-5.417 1.094-8.625 1.063l-3.602-.028L82 153l-1-3Z"
    />
    <Path
      fill="#E39718"
      d="M126 98h1c.125 6.625.125 6.625-1 10a197.417 197.417 0 0 1-5 3 89.165 89.165 0 0 0-4 4l-3-1 1.61-1.215c5.373-4.324 8.146-8.273 10.39-14.785Z"
    />
    <Path
      fill="#C7681B"
      d="M61 150h15v3c-1.937.027-3.875.046-5.813.063l-3.269.035C64 153 64 153 61 152v-2Z"
    />
    <Path
      fill="#F3C631"
      d="M76 40h6l-2 15h-2l-.184-2.266-.254-2.984c-.08-.975-.162-1.95-.246-2.953C77.05 44.435 76.646 42.28 76 40Z"
    />
    <Path
      fill="#F7F56D"
      d="m66 13 2 1-4 2 2-3Zm-4 3h2l-1 14 2 1-5 1c.14-2.48.287-4.959.438-7.438l.119-2.142c.33-5.307.33-5.307 1.443-6.42Z"
    />
    <Path
      fill="#B05B25"
      d="M102 139h2l.813 1.813c1.172 2.16 2.38 3.545 4.187 5.187l-2 2-2-2c-3.1.322-3.1.322-6 1 .75-5.75.75-5.75 3-8Z"
    />
    <Path
      fill="#AF5B25"
      d="M53 140h4v2h2l-1 5-2.188-.563c-2.94-.457-4.953-.172-7.812.563l1.938-2.375c2.043-2.42 2.043-2.42 3.062-4.625Z"
    />
    <Path
      fill="#F9C626"
      d="m104 108 2 1c-1 3-1 3-3.723 4.605l-3.34 1.582-3.347 1.606L93 118l-1-3c2.494-2.494 4.836-3.106 8.125-4.219 2.07-.723 2.07-.723 3.875-2.781Z"
    />
    <Path
      fill="#F8D43B"
      d="M48 38c1.439 2.569 2.22 4.811 3 7.688L52 49l2 1v2l7 1v1l-9-1-2-5h-2c-.194-1.478-.38-2.958-.563-4.438l-.316-2.496L47 39l1-1Z"
    />
    <Path
      fill="#F09F0B"
      d="m114 111 3 1c-3.14 4.52-6.215 6.515-11 9 0-4 0-4 1.645-5.738l2.168-1.575 2.144-1.613L114 111Z"
    />
    <Path
      fill="#DF8210"
      d="m32 103 3 1c.914 2.582.914 2.582 1.625 5.813l.727 3.207L38 116c.328 1.335.658 2.669 1 4-4.3-3.87-6.781-9.323-7.25-15.063L32 103Z"
    />
    <Path
      fill="#EA9308"
      d="M57 121c1.783.446 3.564.904 5.328 1.418 5.763 1.255 11.79 1.291 17.672 1.582v1H59v-2h-5l3-2Z"
    />
    <Path
      fill="#EFA916"
      d="M72 53c2.762 2.762 2.579 5.207 3 9-5.045 2.215-7.86 1.85-13 0v-1h11l-1-8Z"
    />
    <Path
      fill="#FEFD7B"
      d="m68 13 4 1-5 1 1-2Zm-2 2c0 2.798-.372 4.98-1 7.688l-.563 2.449L64 27h2l1 4-4-1c-.027-1.77-.046-3.542-.063-5.313l-.035-2.988C63 19 63 19 64 16l2-1Z"
    />
    <Path
      fill="#EBBF36"
      d="M37 78h1l.438 2.875c.391 3.018.391 3.018 1.562 5.125a135.916 135.916 0 0 1-3 7c-2-2-2-2-2.012-4.531l.325-2.969.3-2.969C36 80 36 80 37 78Z"
    />
    <Path
      fill="#999"
      d="M61 33c1.675.286 3.344.618 5 1l-1 4h-4v2h-2c.875-5.875.875-5.875 2-7Z"
    />
    <Path
      fill="#FACE29"
      d="m112 69 2 1c-4.118 3.616-8.046 6.615-13 9-2.438-.25-2.438-.25-4-1l1.938-.313L101 77l1-3a168.166 168.166 0 0 1 6-2c2.302-1.516 2.302-1.516 4-3Z"
    />
    <Path fill="#773014" d="m59 135 3 1v11h-2l-1-12Z" />
    <Path
      fill="#A14D27"
      d="M85 50c1 3 1 3-.125 5.688C83 58 83 58 80.312 58.312L78 58l-1-2 1.75-.188C81.887 54.68 83.092 52.659 85 50Z"
    />
    <Path fill="#F3AC27" d="m81 41 4 2-1 4h-2l-1 5h-1l1-11Z" />
    <Path
      fill="#FAD933"
      d="M55 80c8.571 1 8.571 1 12 2v2c-7.385.492-7.385.492-10.5-2L55 80Z"
    />
    <Path
      fill="#FDC62A"
      d="M106 19c3.982 3.982 3.982 3.982 4.063 8.625L110 31l-1-2h-2l-1-10Z"
    />
    <Path fill="#F39B17" d="M108 149v5l-6-1v-3c2-1 2-1 6-1Z" />
    <Path
      fill="#F49A16"
      d="M129 148v3c-6.055.195-6.055.195-8 0l-2-2c6.625-2.125 6.625-2.125 10-1Z"
    />
    <Path
      fill="#EA9A0C"
      d="m36 106 2.25 2.438c2.503 2.332 3.468 3.197 6.75 3.562v2c-6.453-.487-6.453-.487-9-2.875C35 109 35 109 36 106Z"
    />
    <Path
      fill="#EAB225"
      d="M35 83h1c.083 4.833-.047 9.237-1 14l-2-1c-.193-4.824.243-8.496 2-13Z"
    />
    <Path
      fill="#F4CA30"
      d="m97 55 2 1c-3.265 3.265-7.41 3.932-11.938 4.125L85 60l1-3 2.152-.184 2.785-.254c.917-.08 1.834-.162 2.778-.246C95.962 56.24 95.962 56.24 97 55Z"
    />
    <Path
      fill="#FDEF5D"
      d="M72 49v2c-3.923 1.308-6.86 1.197-11 1l-2-2c1.416-.17 2.833-.335 4.25-.5l2.39-.281C68 49 68 49 72 49Z"
    />
    <Path
      fill="#A9551B"
      d="m100 149 .625 1.875c1.923 2.972 4.04 3.255 7.375 4.125v2c-2.813.313-2.813.313-6 0-1.938-2.313-1.938-2.313-3-5l1-3Z"
    />
    <Path fill="#F59F17" d="m50 149 5 1v4h-5v-5Z" />
    <Path
      fill="#7A3115"
      d="M96 136h3c-.114 1.46-.242 2.917-.375 4.375-.07.812-.14 1.624-.21 2.46C98 145 98 145 96 147v-11Z"
    />
    <Path
      fill="#F9B91B"
      d="m103 112 2 1-5 2 3-3Zm-3 4-6 4-1-3c3.625-2.125 3.625-2.125 7-1Z"
    />
    <Path
      fill="#EEC938"
      d="M121 79c2.245 2.245 2.37 2.96 2.75 6l.297 2.125C124 89 124 89 122 91c-1.806-4.462-2.117-7.31-1-12Z"
    />
    <Path
      fill="#FBD335"
      d="M23 68c-1.418 2.836-3.048 2.994-6 4-1.66.369-3.325.713-5 1 2.89-3.211 6.521-7.24 11-5Z"
    />
    <Path
      fill="#D2951E"
      d="M85 53c.75 1.75.75 1.75 1 4-1.563 2.25-1.563 2.25-4 4-3.25.25-3.25.25-6 0v-2l3.375-.75c3.671-.86 3.671-.86 5.063-3.375L85 53Z"
    />
    <Path fill="#CCCCCB" d="m93 32 4 1v4h-5l1-5Z" />
    <Path fill="#EFB01A" d="m122 101 1 3-7 7-2-1 8-9Z" />
    <Path
      fill="#92491C"
      d="M104 133c-1.37 3.161-1.99 3.993-5 6v-3l-4 1v-2c6.75-2 6.75-2 9-2Z"
    />
    <Path fill="#F3AF29" d="M75 41h2l1 8-1-3c-2.015-.733-2.015-.733-4-1l2-4Z" />
    <Path
      fill="#615F46"
      d="M91 31h2c-.45 1.482-.91 2.96-1.375 4.438l-.773 2.496C90 40 90 40 88 41c-.23-3.367-.34-5.414 1.375-8.375L91 31Z"
    />
    <Path
      fill="#313030"
      d="M98 37h1l1 7-3 2-4-2 1.938-.688c2.334-1.165 2.334-1.165 2.812-3.937L98 37Z"
    />
    <Path
      fill="#F7B323"
      d="M49 23c1.47 3.82.526 6.306-1 10l-2 2c.508-4.318 1.197-8.033 3-12Z"
    />
    <Path fill="#FADA3A" d="m115 68 2 2-8 6c0-3 0-3 1.313-4.387L115 68Z" />
    <Path fill="#FAB720" d="M110 26c2.566 3.85 2.551 6.435 3 11l-1-2h-2v-9Z" />
    <Path
      fill="#FEE943"
      d="m101 20 3 1 1 8c-2.523-1.974-2.993-2.967-3.688-6.188L101 20Z"
    />
    <Path fill="#F0AB15" d="m39 57 3 3-4-2 1-1Z" />
    <Path fill="#FCD434" d="m37 55 2 2h-2v-2Z" />
    <Path fill="#F7C72B" d="m119 58 2 1Z" />
  </Svg>
);
export default ChickenSvg;