import path from 'path';
import { expect as baseExpect, test as baseTest } from '@playwright/test';

export type OrganizationData = {
  name: string;
  slug: string;
  status: string;
  planType: string;
  trialDays?: string;
  imagePath?: string;
  admin: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
  };
};

type Fixtures = {
  email: string;
  password: string;
  baseUrl: string;
  organizationData: OrganizationData;
};

export const test = baseTest.extend<Fixtures>({
  email: 'admin@chairlyo.com',
  password: 'adminpassword',
  baseUrl: 'https://stage.chairlyo.com',
  organizationData: async ({}, use) => {
    const uniqueId = Date.now();
    await use({
      name: `Web Development ${uniqueId}`,
      slug: `web-development-${uniqueId}`,
      status: 'Trial',
      planType: 'basic',
      trialDays: '10',
      imagePath: path.join(__dirname, '..', 'assets', 'images.jpeg'),
      admin: {
        firstName: 'Obin',
        lastName: 'Shrestha',
        email: `obin+${uniqueId}@gmail.com`,
        password: 'Password@123',
        phone: '9801123333',
      },
    });
  },
});

export const expect = baseExpect;
