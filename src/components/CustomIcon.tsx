import { IconDefinition, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

/**
 * Creates a custom icon for use with FontAwesome.
 *
 * @param name The name to give the icon
 * @param svgPath the SVG path to use for the icon
 * @returns Custom IconDefinition compatible with FontAwesome
 */
export const CustomIcon = (name: string, svgPath: string) => {
  // See here:
  // https://stackoverflow.com/questions/54417440/can-custom-icons-be-added-to-font-awesome-react
  return {
    icon: [24, 24, [], '', svgPath],
    iconName: name as IconName,
    prefix: 'custom' as IconPrefix,
  } as IconDefinition;
};
