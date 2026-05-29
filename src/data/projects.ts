export interface ProjectDetail {
  about: string
  gifUrl: string | null
  previewImage?: string
}

export const projectDetails: Record<string, ProjectDetail> = {
  chexot: {
    gifUrl: null,
    about: `CHEXOT is an intelligent invoice and accounting document processing system built to take the manual labor out of managing financial paperwork. By automatically reading and organizing invoices from uploaded PDFs, images, and data files, the platform quickly extracts key information and passes it through an automated quality-check layer to ensure the data is accurate. This setup gives users a clean interface to track and process KPIs without having to jump between different tools or worry about data entry mistakes. Ultimately, the system transforms chaotic incoming billing documents into a structured, reliable data stream that optimizes the entire accounting verification workflow.`,
  },

  smp: {
    gifUrl: null,
    previewImage: '/images/smp-preview.png',
    about: `The Student Management Platform (SMP) is a full-stack web application designed to act as a fast, unified academic dashboard that solves the scattered navigation of the official OBIS portal. By securely syncing and scraping data with an AI agent to store it locally, the app provides instantaneous access to a single-view dashboard tracking courses, grades, attendance, exams, and announcements. SMP elevates this data by introducing features missing from the native portal, including automated attendance percentage tracking with threshold warnings, filtered upcoming deadlines, and deep analytics covering grade distribution and attendance trends.`,
  },

  '30daypython': {
    gifUrl: null,
    about: `30 Days of Python is a hands-on exercise, inspired by [Asabeneh's 30-days-of-python](https://github.com/asabeneh/30-days-of-python) curriculum, built to transform theory into practice through thirty structured Jupyter notebooks. Designed for intermediate learners looking to solidify their existing knowledge, each daily notebook includes concept breakdowns, code stubs, and instant-feedback test cells that ensure your solution passes before you move on. The challenge builds momentum through cumulative capstone projects every five days, culminating in a comprehensive, full-stack Student Management Platform project brief on day thirty.`,
  },
}
