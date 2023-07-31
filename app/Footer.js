const currentDate = new Date();
const currentYear = currentDate.getFullYear().toString();
const Footer = () => {
    return (
        <div className="bg-gray-700 py-4 text-white text-center dark:bg-red-700 dark:text-black">
        @ Syed Kamruzzaman ::{ currentYear }:: @
    </div>
    );
};

export default Footer;