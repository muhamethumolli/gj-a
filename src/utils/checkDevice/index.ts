import { UAType } from '../../interfaces/IUserAgent';

export const checkDeviceByUA = (ua: string): UAType => {
  let _ua: UAType = 'desktop';
  const checkMobile: boolean =
    /android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      ua.toLowerCase()
    );
  const checkTablet: boolean =
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
      ua.toLowerCase()
    );
  if (checkMobile) _ua = 'touch';
  if (checkTablet) _ua = 'touchTablet';

  return _ua;
};

export const checkDeviceByStrUA = (
  returnStrFromUA: UAType
): { isMobile: boolean; isTablet: boolean } => {
  let isMobile = false;
  let isTablet = false;
  if (returnStrFromUA === 'touch') isMobile = true;
  if (returnStrFromUA === 'touchTablet') {
    isMobile = true;
    isTablet = true;
  }
  return { isMobile, isTablet };
};
