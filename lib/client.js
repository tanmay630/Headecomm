import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '65onmlzt',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: "skSEBXtg5gyNAZKUfFycAn0tgjWoCEDhEGevMeq9GgkfB7Dr97HCYWOvObfd6pUSRuh5wczRwusNfpR8xWPLh1AGvHVNHnlsT5igsUkKirB6PBJzmCnHMIhaOMl72uvselpYw6LlA4nJgivkMJXeagUhOLBuQhaSbL1yH737EfDpCvyLAas0"
  });
  
  const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);