import path from 'path';

export type OrganizationData = {
  name: string;
  slug: string;
  status: string;
  planType: string;
  trialDays?: string;
  organizationLogo?: string;
  admin: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
  };
};

export function buildOrganizationData(): OrganizationData {
  const uniqueId = Date.now();
  return {
    name: `Web Development ${uniqueId}`,
    slug: `web-development-${uniqueId}`,
    status: 'Trial',
    planType: 'Claude',
    trialDays: '10',
    organizationLogo: path.join(__dirname, '..', 'assets', 'images.jpeg'),
    admin: {
      firstName: 'Obin',
      lastName: 'Shrestha',
      email: `obin+${uniqueId}@gmail.com`,
      password: 'Password@123',
      phone: '9801123333',
    },
  };
}
