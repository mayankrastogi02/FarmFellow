import { UnstyledButton, useMantineColorScheme } from '@mantine/core';
import { RiContrast2Fill } from "@react-icons/all-files/ri/RiContrast2Fill";
import { RiContrast2Line } from "@react-icons/all-files/ri/RiContrast2Line"

function LightDarkButton() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <UnstyledButton
            onClick={toggleColorScheme}
            title='Toggle colour scheme'
        >

            {dark ? (
                <div className='text-xl'>
                    <RiContrast2Fill />
                </div>
            ) : (
                <div className='text-xl'>
                    <RiContrast2Line />
                </div>
            )}
        </UnstyledButton>
    );
}
export default LightDarkButton;