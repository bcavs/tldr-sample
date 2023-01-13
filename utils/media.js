import { css } from 'styled-components';

const mediaQuery =
	(...queryFeatures) =>
	(...rules) =>
		css`
			@media ${css(...queryFeatures)} {
				${css(...rules)}
			}
		`;

const containerQuery =
	(...queryFeatures) =>
	(...rules) =>
		css`
			&:container${css(...queryFeatures)} {
				${css(...rules)}
			}
		`;

export const breakpoint = {
	small: 600,
	medium: 768,
	large: 1024,
	xlarge: 1280,
	xxlarge: 1920,
};

export const containers = {
	small: 250,
	medium: 500,
	large: 750,
	xlarge: 1000,
	xxlarge: 1500,
};

export const media = {
	small: mediaQuery`(min-width: ${breakpoint.small}px)`,
	medium: mediaQuery`(min-width: ${breakpoint.medium}px)`,
	large: mediaQuery`(min-width: ${breakpoint.large}px)`,
	xlarge: mediaQuery`(min-width: ${breakpoint.xlarge}px)`,
	xxlarge: mediaQuery`(min-width: ${breakpoint.xxlarge}px)`,
};

export const container = {
	small: containerQuery`(max-width: ${containers.small}px)`,
	medium: containerQuery`(max-width: ${containers.medium}px)`,
	large: containerQuery`(max-width: ${containers.large}px)`,
	xlarge: containerQuery`(max-width: ${containers.xlarge}px)`,
	xxlarge: containerQuery`(max-width: ${containers.xxlarge}px)`,
};
