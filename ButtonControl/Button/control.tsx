import * as React from 'react';
import { IIconProps, PrimaryButton, DefaultButton, initializeIcons, getTheme, Label, Stack } from 'office-ui-fabric-react';
initializeIcons();
export interface IScriptButtonProps {
    primary?: boolean,
    text: string,
    disabled?: boolean,
    fabricIcon: string,
    onClick?: () => void
}

export const ScriptButton: React.FunctionComponent<IScriptButtonProps> = props => {
    const buttonIcon: IIconProps = { iconName: props.fabricIcon };
    const theme = getTheme();   
    return (
        <DefaultButton primary={props.primary} text={props.text} disabled={props.disabled} onClick={props.onClick} iconProps={buttonIcon} />
    );
}