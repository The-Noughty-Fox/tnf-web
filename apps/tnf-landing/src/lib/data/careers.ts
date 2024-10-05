import Img from '../../assets/technologies/swift.png';

export const careers = {
  vacancies: [
    {
      image: Img,
      title: 'iOS Developer',
      tags: ['Engineering', 'Fulltime', 'Remote'],
      weAreLookingFor: {
        title: 'Few words about the job and responsibilities',
        body: 'We’re looking for a talented Fullstack Software Engineer to help us build high-quality features across the platform: HTTPie Cloud, HTTPie for Web & Desktop, HTTPie for Terminal, our docs/website, etc.',
      },
      jobProperties: [
        {
          title: 'Location',
          value: 'Chisinau',
        },
        {
          title: 'Job Type',
          value: 'Full time',
        },
        {
          title: 'Department',
          value: 'Engineering',
        },
        {
          title: 'Work format',
          value: 'Remote',
        },
      ],
      lists: [
        {
          title:
            'Here we will describe what are we looking for in the potential candidate',
          items: [
            'At least 5 years of software engineering and Python experience',
            'Demonstrated ability to lead the development of an open-source project',
            'Excellent English and technical writing skills',
            'Solid understanding of HTTP and modern APIs',
            'Passion for developer tools and sense for what makes them amazing',
            'Passion for simplicity and delightful user experience',
            'Good sense for when to choose a robust vs. minimal solution to move fast',
            'Ability to comfortably navigate the ladder of abstraction',
            'Eagerness to learn and share',
          ],
        },
        {
          title:
            'Off course here we should mention perks and benefits we offer\n',
          items: [
            'Flexible working hours',
            'Hybrid work schedule',
            'Competitive salary',
            'Young and talented team',
            'Office in city center',
          ],
        },
      ],
    },
  ],
};
