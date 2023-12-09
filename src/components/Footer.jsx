import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" border-t-[1px]  mx-[20px]">
      <div className="block w-[191px] mx-auto my-[41px]">
        <div className="flex flex-row gap-16 w-full items-start">
          <a target="_blank" href="https://wa.me/qr/5CR4WO23H3AJP1">
            <svg
              className="hover:fill-slate-50 transition-all "
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="#959595"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7559 13.1555C15.4863 13.0207 14.1645 12.3711 13.9184 12.2806C13.6723 12.191 13.4932 12.1467 13.3132 12.4163C13.134 12.6841 12.6192 13.2903 12.4627 13.4694C12.3053 13.6495 12.1488 13.6712 11.8801 13.5373C11.6113 13.4016 10.7446 13.1184 9.71774 12.2028C8.91886 11.4899 8.37874 10.6095 8.22222 10.3399C8.0657 10.0712 8.20503 9.92557 8.33983 9.79167C8.46107 9.67134 8.60854 9.47773 8.74334 9.32121C8.87815 9.16378 8.92248 9.0516 9.01205 8.87155C9.10252 8.69242 9.05729 8.5359 8.98943 8.40109C8.92248 8.26629 8.38507 6.94266 8.1607 6.40435C7.94265 5.88051 7.72099 5.95198 7.55633 5.94293C7.39891 5.93569 7.21977 5.93389 7.04064 5.93389C6.8615 5.93389 6.57017 6.00084 6.32409 6.27045C6.07709 6.53915 5.38316 7.18966 5.38316 8.51328C5.38316 9.836 6.3458 11.1144 6.48061 11.2944C6.61541 11.4736 8.37602 14.1896 11.073 15.354C11.7154 15.6308 12.2157 15.7964 12.6056 15.9194C13.2498 16.1248 13.8361 16.0958 14.2993 16.0262C14.815 15.9493 15.8898 15.3757 16.1142 14.7478C16.3377 14.1199 16.3377 13.5816 16.2707 13.4694C16.2038 13.3572 16.0246 13.2903 15.755 13.1555H15.7559ZM10.8505 19.8532H10.8468C9.24496 19.8535 7.67248 19.4229 6.29423 18.6065L5.96853 18.4129L2.58301 19.3013L3.48684 16.0009L3.27423 15.6625C2.37867 14.2369 1.90473 12.5871 1.90718 10.9036C1.90899 5.97279 5.92057 1.9612 10.8541 1.9612C13.2426 1.9612 15.4881 2.89308 17.1764 4.58312C18.0091 5.41238 18.6691 6.39853 19.1182 7.48451C19.5673 8.57049 19.7966 9.73474 19.7929 10.9099C19.791 15.8407 15.7795 19.8532 10.8505 19.8532ZM18.4611 3.2993C17.4642 2.29588 16.2782 1.50027 14.9716 0.958576C13.665 0.416879 12.264 0.139867 10.8496 0.143592C4.91994 0.143592 0.0922828 4.97034 0.0904733 10.9027C0.0895686 12.799 0.584458 14.6501 1.52629 16.2813L0 21.8572L5.70344 20.3608C7.28118 21.2204 9.04923 21.6708 10.8459 21.6708H10.8505C16.7801 21.6708 21.6077 16.8441 21.6096 10.9108C21.6139 9.49697 21.3379 8.09629 20.7975 6.78979C20.2571 5.4833 19.463 4.29692 18.4611 3.2993Z"
              />
            </svg>
          </a>
          <a target="_blank" href="https://dribbble.com/Julia_Stepanova">
            <svg
              className="hover:fill-slate-50 transition-all "
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="#959595"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.4664 0.143555C5.47257 0.143555 0.609619 5.0065 0.609619 11.0004C0.609619 16.9942 5.47257 21.8572 11.4664 21.8572C17.4485 21.8572 22.3233 16.9942 22.3233 11.0004C22.3233 5.0065 17.4485 0.143555 11.4664 0.143555ZM18.6374 5.14764C19.9741 6.77557 20.7138 8.81173 20.7336 10.918C20.4278 10.8592 17.3662 10.235 14.2811 10.624C14.2096 10.4702 14.1508 10.3055 14.0802 10.1409C13.8883 9.68797 13.6844 9.24026 13.4686 8.79825C16.8831 7.40858 18.4374 5.4073 18.6374 5.14764ZM11.4664 1.74584C13.8215 1.74584 15.9765 2.62796 17.6132 4.07644C17.4485 4.31167 16.0471 6.18447 12.7503 7.42034C11.2303 4.63014 9.54749 2.34477 9.28784 1.99193C10.002 1.82517 10.7331 1.74228 11.4664 1.74494V1.74584ZM7.52179 2.61619C7.76879 2.94642 9.41721 5.24264 10.9598 7.97403C6.62611 9.12848 2.79908 9.10495 2.38742 9.10495C2.98817 6.23151 4.93154 3.84121 7.52179 2.61619ZM2.18748 11.0121V10.7299C2.58827 10.7416 7.08571 10.8004 11.7143 9.41075C11.9849 9.92917 12.2318 10.4584 12.4671 10.9886C12.3495 11.0239 12.2201 11.0592 12.1025 11.0945C7.32185 12.637 4.77773 16.8522 4.56602 17.2059C3.03468 15.5064 2.1873 13.2998 2.18748 11.0121ZM11.4664 20.2793C9.32312 20.2793 7.34537 19.5492 5.77927 18.3251C5.94394 17.9831 7.82759 14.356 13.0561 12.5312C13.0796 12.5194 13.0922 12.5194 13.1149 12.5077C14.4222 15.8868 14.9515 18.725 15.0935 19.5375C13.9744 20.0206 12.7503 20.2793 11.4664 20.2793ZM16.6361 18.6897C16.542 18.1243 16.0471 15.4164 14.8339 12.0833C17.7426 11.6246 20.2858 12.3783 20.6043 12.4841C20.2035 15.0626 18.7197 17.2883 16.6361 18.6897Z"
              />
            </svg>
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/yuliia-stepanova-8231641ab/"
          >
            <svg
              className="hover:fill-slate-50 transition-all "
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="#959595"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.4432 0H1.20324C0.716492 0 0.323242 0.39325 0.323242 0.88V21.12C0.323242 21.6068 0.716492 22 1.20324 22H21.4432C21.93 22 22.3232 21.6068 22.3232 21.12V0.88C22.3232 0.39325 21.93 0 21.4432 0ZM6.84899 18.7468H3.58474V8.24725H6.84899V18.7468ZM5.21824 6.81175C4.84404 6.81175 4.47824 6.70079 4.1671 6.49289C3.85597 6.28499 3.61346 5.9895 3.47026 5.64379C3.32706 5.29807 3.28959 4.91765 3.3626 4.55064C3.4356 4.18363 3.6158 3.84651 3.8804 3.5819C4.145 3.3173 4.48212 3.13711 4.84913 3.0641C5.21614 2.9911 5.59656 3.02857 5.94228 3.17177C6.288 3.31497 6.58349 3.55747 6.79138 3.86861C6.99928 4.17975 7.11024 4.54555 7.11024 4.91975C7.10749 5.96475 6.26049 6.81175 5.21824 6.81175ZM19.07 18.7468H15.8085V13.64C15.8085 12.4218 15.7865 10.857 14.1117 10.857C12.415 10.857 12.1537 12.1825 12.1537 13.552V18.7468H8.89499V8.24725H12.0245V9.68275H12.0685C12.503 8.85775 13.5672 7.986 15.1567 7.986C18.4622 7.986 19.07 10.1612 19.07 12.9882V18.7468Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
