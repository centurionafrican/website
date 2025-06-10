import { IndustryType } from "../../types";

export type SecurityFeatureType = {
  id: string;
  title: string;
  description: string;
  icon: string;
  buttons: string[];
};

export type IndustryContentType = {
  title: string;
  description: string;
  features: SecurityFeatureType[];
};

export const industryData: Record<IndustryType, IndustryContentType> = {
  hospitality: {
    title: 'Hospitality',
    description: `Keeping guests secure is the number one priority in the Hospitality 
                 industry. Whether they are business travelers or a family on vacation, 
                 your guests deserve to feel safe and protected during their stay.
                 
                 Discover how Centurion is the best choice for keeping your guests 
                 feeling protected.`,
    features: [
      {
        id: 'intruder-detection',
        title: 'Intruder detection',
        description: `The surveillance system incorporates multiple layers of protection 
                    to detect intruders before they enter the secure perimeter. The 
                    system uses advanced motion detection and video analytics 
                    technology to trigger alarms and send alerts to security personnel.
                    
                    The cameras are equipped with night vision and thermal imaging 
                    capabilities to detect intruders in low light and poor weather 
                    conditions.`,
        icon: '/cent.svg',
        buttons: ['Fencing', 'Barrier gates', 'Electronic sensors']
      },
      {
        id: 'access-control',
        title: 'Access control',
        description: `The surveillance system Centurion provides uses advanced 
                    access control technology to restrict unauthorized access to the 
                    restricted areas.
                    
                    The system provides secure access to authorized personnel, while 
                    preventing unauthorized access by potential intruders.`,
        icon: '/cent.svg',
        buttons: ['Two-Factor Authentication', 'Biometric Authentication', 'Smart Card Authentication']
      },
      {
        id: 'perimeter-protection',
        title: 'Perimeter protection',
        description: `The surveillance system uses advanced perimeter protection technology to secure the 
                    outer perimeter of your business. The system provides secure fencing and barriers to 
                    prevent intruders from gaining access to the your business.`,
        icon: '/cent.svg',
        buttons: ['Electric Fencing', 'Barrier Gates', 'Electronic Sensors']
      },
      {
        id: 'event-security',
        title: 'Event security',
        description: `From simple entry control to a full concept of highest security, 
                    Centurion provides you with the best solution for any event you may host in 
                    your place of business.`,
        icon: '/cent.svg',
        buttons: ['Crowd Control', 'Emergency Evacuation']
      },
      {
        id: 'physical-security',
        title: 'Physical security',
        description: `Centurion Security Group provides highly trained guards that patrol, monitor activity, 
                    deter theft, intrusions and respond immediately to any security breaches.`,
        icon: '/cent.svg',
        buttons: ['Live Patrol', 'Guarding']
      },
      {
        id: 'real-time-analytic',
        title: 'Real-time analytics',
        description: `Centurion surveillance system uses advanced real-time analytics technology to 
                    process and analyze the data collected by the system's sensors and cameras.`,
        icon: '/cent.svg',
        buttons: ['Real-Time Data Processing', 'Statistical Analysis', 'Predictive Analysis']
      }
    ]
  },
  airports: {
    title: 'Airports',
    description: `Airport security demands the highest level of vigilance and technology. 
                 Centurion provides comprehensive solutions that protect passengers, 
                 staff, and infrastructure while maintaining operational efficiency.`,
    features: [
      {
        id: 'perimeter-security',
        title: 'Perimeter security',
        description: `Our advanced perimeter security systems combine physical barriers, 
                    surveillance technology, and rapid response protocols to prevent 
                    unauthorized access to airside areas.`,
        icon: '/cent.svg',
        buttons: []
      },
      {
        id: 'access-control',
        title: 'Access control',
        description: `Our integrated access control systems ensure only authorized personnel 
                    can enter sensitive areas while maintaining efficient flow of operations.`,
        icon: '/cent.svg',
        buttons: []
      },
      {
        id: 'surveillance',
        title: 'Advanced surveillance',
        description: `High-definition camera networks with AI-powered analytics provide 
                    complete visibility of all airport zones and can detect suspicious 
                    behavior in real-time.`,
        icon: '/cent.svg',
        buttons: []
      }
    ]
  },
  'critical-infrastructure': {
    title: 'Critical Infrastructure',
    description: `Protecting vital systems requires uncompromising security solutions. 
                 Centurion delivers multi-layered protection for critical infrastructure 
                 that keeps essential services running safely and securely.`,
    features: [
      {
        id: 'intrusion-prevention',
        title: 'Intrusion prevention',
        description: `Our advanced systems detect and prevent unauthorized access to critical 
                    facilities using multi-factor authentication and continuous monitoring.`,
        icon: '/cent.svg',
        buttons: []
      },
      {
        id: 'threat-detection',
        title: 'Threat detection',
        description: `Cutting-edge sensors and analytics identify potential threats before 
                    they can impact operations, enabling proactive security measures.`,
        icon: '/cent.svg',
        buttons: []
      }
    ]
  },
  'government-buildings': {
    title: 'Government Buildings',
    description: `With rising global threats, the need for effective security systems in government 
                 buildings is crucial. This is how Centurion can help you implement practical security.`,
    features: [
      {
        id: 'intruder-detection',
        title: 'Intruder detection',
        description: `The surveillance system incorporates multiple layers of protection 
                    to detect intruders before they enter the government buildings. The 
                    system uses advanced motion detection and video analytics 
                    technology to trigger alarms and send alerts to security personnel.
                    
                    The cameras are equipped with night vision and thermal imaging 
                    capabilities to detect intruders in low light and poor weather 
                    conditions.`,
        icon: '/cent.svg',
        buttons: ['High Resolution Cameras', 'Thermal Imaging Cameras', 'Real-Time Monitoring', 'Motion Detection Sensors']
      },
      {
        id: 'access-control',
        title: 'Access control',
        description: `The surveillance system Centurion provides uses advanced access control 
                    technology to restrict unauthorized access to government buildings. 
                    The system provides secure access to authorized personnel, while 
                    preventing unauthorized access by potential intruders.`,
        icon: '/cent.svg',
        buttons: ['Two-Factor Authentication', 'Biometric Authentication', 'Smart Card Authentication']
      },
      {
        id: 'perimeter-protection',
        title: 'Perimeter protection',
        description: `The surveillance system uses advanced perimeter protection technology to secure 
                    the government building's outer perimeter. The system provides secure fencing and 
                    barriers to prevent intruders from gaining access to the Government buildings.`,
        icon: '/cent.svg',
        buttons: ['Electric Fencing', 'Barrier Gates', 'Electronic Sensors']
      },
      {
        id: 'physical-security',
        title: 'Physical security',
        description: `Centurion provides specially, highly trained guards to ensure the safety of the premises 
                    and the staff that patrol and monitor the premises and react effectively in any 
                    emergency situations.`,
        icon: '/cent.svg',
        buttons: ['Live patrol', 'Guarding']
      },
      {
        id: 'close-protection',
        title: 'Close Protection Officers',
        description: `Close Protection Officers are assigned to ensure the safety of ambassadors, consuls and 
                    other high-ranking government officials and their families.`,
        icon: '/cent.svg',
        buttons: ['Professional', 'Highly Trained']
      },
      {
        id: 'real-time-analytics',
        title: 'Real-Time Analytics',
        description: `The surveillance system uses advanced real-time analytics technology to process 
                    and analyze the data collected by the system's sensors and cameras.`,
        icon: '/cent.svg',
        buttons: ['Real-Time Data Processing', 'Statistical Analysis', 'Predictive Analysis']
      }
    ]
  },
  'construction-sites': {
    title: 'Construction Sites',
    description: `In today's world, construction site security is becoming increasingly important for keeping 
                 people, equipment, and property safe from theft, vandalism, and fire. This is how 
                 Centurion can protect your assets.`,
    features: [
      {
        id: 'intruder-detection',
        title: 'Intruder Detection',
        description: `The surveillance system incorporates multiple layers of protection 
                    to detect intruders before they enter the construction site. The 
                    system uses advanced motion detection and video analytics 
                    technology to trigger alarms and send alerts to security personnel.
                    
                    The cameras are equipped with night vision and thermal imaging 
                    capabilities to detect intruders in low light and poor weather 
                    conditions.`,
        icon: '/cent.svg',
        buttons: ['High Resolution Cameras', 'Thermal Imaging Cameras', 'Real-Time Monitoring', 'Motion Detection Sensors']
      },
      {
        id: 'access-control',
        title: 'Access Control',
        description: `The surveillance system Centurion provides uses advanced 
                    access control technology to restrict unauthorized access to the 
                    construction site. The system provides secure access to 
                    authorized personnel and contractors, while preventing 
                    unauthorized access by potential intruders.`,
        icon: '/cent.svg',
        buttons: ['Biometric Authentication', 'Smart Card Authentication', 'Two-Factor Authentication']
      },
      {
        id: 'perimeter-protection',
        title: 'Perimeter Protection',
        description: `The surveillance system uses advanced perimeter protection technology to secure 
                    the construction site's outer perimeter. The system provides secure fencing and barriers 
                    to prevent intruders from gaining access to the construction site.`,
        icon: '/cent.svg',
        buttons: ['Electric Fencing', 'Barrier Gates', 'Electronic Sensors']
      },
      {
        id: 'fire-prevention',
        title: 'Fire Prevention',
        description: `The surveillance system includes fire prevention technology to keep the 
                    construction site safe from fires. The system provides early warning and 
                    alerts for potential fires to prevent serious damage.`,
        icon: '/cent.svg',
        buttons: ['Fire Detection', 'Alerts & Notifications', 'Fire Suppression']
      },
      {
        id: 'environmental-monitoring',
        title: 'Environmental Monitoring',
        description: `The Centurion surveillance system includes environmental monitoring technology to 
                    monitor and detect changes in the environment on and around the construction site.`,
        icon: '/cent.svg',
        buttons: ['Advanced Monitoring Equipment', 'Humidity Monitor', 'Temperature Monitor']
      },
      {
        id: 'real-time-analytics',
        title: 'Real-Time Analytics',
        description: `The surveillance system uses advanced real-time analytics technology to process 
                    and analyze the data collected by the system's sensors and cameras.`,
        icon: '/cent.svg',
        buttons: ['Real-Time Data Processing', 'Statistical Analysis', 'Predictive Analysis']
      }
    ]
  },
  education: {
    title: 'Education',
    description: `Security systems are increasingly important, especially for schools and other educational 
                 institutions. With rising concerns about violence, theft, and other security threats, it's more important 
                 than ever for schools to have effective security measures in place.`,
    features: [
      {
        id: 'intruder-detection',
        title: 'Intruder Detection',
        description: `The surveillance system incorporates multiple layers of protection 
                    to detect intruders. The system uses advanced motion detection and video analytics 
                    technology to trigger alarms and send alerts to security personnel.`,
        icon: '/cent.svg',
        buttons: ['High Resolution Cameras', 'Real-Time Monitoring', 'Motion Detection Sensors']
      },
      {
        id: 'physical-security',
        title: 'Physical Security',
        description: `Centurion Security Group provides highly trained guards that patrol, monitor activity, deter 
                    Intrusion and respond immediately to any security breaches.`,
        icon: '/cent.svg',
        buttons: ['Live Patrols', 'Guarding']
      },
      {
        id: 'perimeter-protection',
        title: 'Perimeter Protection',
        description: `The surveillance system uses advanced perimeter protection technology to secure 
                    the school's outer perimeter. The system provides secure fencing and barriers to 
                    prevent intruders from gaining access to the school premises.`,
        icon: '/cent.svg',
        buttons: ['Electric Fencing', 'Barrier Gates', 'Electronic Sensors']
      },
      {
        id: 'fire-prevention',
        title: 'Fire Prevention',
        description: `The surveillance system includes fire prevention technology to keep the 
                    schools from fires. The system provides early warning and alerts for potential 
                    fires to prevent serious damage.`,
        icon: '/cent.svg',
        buttons: ['Fire Detection', 'Alerts & Notifications', 'Fire Suppression']
      },
      {
        id: 'school-bus-security',
        title: 'School Bus Security',
        description: `Several security technologies are available for school buses to help ensure the safety of 
                    students during transportation such as GPS Tracking and driver training.`,
        icon: '/cent.svg',
        buttons: ['GPS Tracking', 'Emergency Alert Systems', 'Video Surveillance']
      },
      {
        id: 'real-time-analytics',
        title: 'Real-Time Analytics',
        description: `The surveillance system uses advanced real-time analytics technology to process 
                    and analyze the data collected by the system's sensors and cameras.`,
        icon: '/cent.svg',
        buttons: ['Real-Time Data Processing', 'Statistical Analysis', 'Predictive Analysis']
      }
    ]
  },
  'public-safety': {
    title: 'Public Safety',
    description: `Public security is a top priority for both individuals and organizations. Here are the 
                 many ways that Centurion Security Group can help protect public spaces and the people who use them.`,
    features: [
      {
        id: 'surveillance-monitoring',
        title: 'Surveillance and Monitoring',
        description: `This involves the use of cameras, sensors, and other monitoring technologies to detect 
                    and track potential threats, such as suspicious behavior, abnormal movements, or unauthorized 
                    access to restricted areas.`,
        icon: '/cent.svg',
        buttons: ['High Resolution Cameras', 'Thermal Imaging Cameras', 'Behavioral Screening']
      },
      {
        id: 'access-control',
        title: 'Access Control',
        description: `The surveillance system Centurion provides uses advanced access control technology to restrict 
                    unauthorized access to restricted areas. The system provides secure access to authorized personnel, 
                    while preventing unauthorized access by potential intruders.`,
        icon: '/cent.svg',
        buttons: ['Two-Factor Authentication', 'Biometric Authentication', 'Smart Card Authentication']
      },
      {
        id: 'emergency-response',
        title: 'Emergency Response Systems',
        description: `These systems are designed to provide rapid response to emergencies, such as natural 
                    disasters, accidents, or acts of terrorism.`,
        icon: '/cent.svg',
        buttons: ['Sirens', 'Alert Notification Systems']
      },
      {
        id: 'remote-monitoring',
        title: 'Remote Monitoring',
        description: `Remote monitoring allows law enforcement to monitor public spaces from a distance, 
                    freeing up officers to handle other tasks.`,
        icon: '/cent.svg',
        buttons: ['Real-time Monitoring', 'Evidence Gathering']
      },
      {
        id: 'real-time-analytics',
        title: 'Real-Time Analytics',
        description: `The surveillance system uses advanced real-time analytics technology to process 
                    and analyze the data collected by the system's sensors and cameras.`,
        icon: '/cent.svg',
        buttons: ['Real-Time Data Processing', 'Statistical Analysis', 'Predictive Analysis']
      }
    ]
  },
  'residence-commercial': {
    title: 'Residence & Commercial',
    description: `Security is not a luxury, but a necessity for any residential home. Protect your loved ones 
                 and property with comprehensive security solutions.`,
    features: [
      {
        id: 'video-surveillance',
        title: 'Video Surveillance',
        description: `The video surveillance system's cameras help you keep an eye on your proprety and deter 
                    potential theft and provide evidence. Equipped with night vision to detect intruders in low light and 
                    poor weather conditions, you can rest assured Centurion is taking care of your security.`,
        icon: '/cent.svg',
        buttons: ['High Resolution Cameras', 'Wireless Cameras', 'Break-In Deterrent']
      },
      {
        id: 'alarms-sensors',
        title: 'Alarms and Sensors',
        description: `The surveillance system Centurion provides uses different, advanced motion detection and video 
                    analytics technology to trigger alarms and send alerts to security personnel such as motion detection, 
                    in addition to smoke detectors to help prevent fires.`,
        icon: '/cent.svg',
        buttons: ['Motion Detection Sensors', 'Sensor Lights', 'Smoke Detector']
      },
      {
        id: 'perimeter-protection',
        title: 'Perimeter Protection',
        description: `Perimeter protection is an essential part of home security, as it helps to prevent intruders 
                    from accessing your property in the first place. The system provides secure fencing 
                    and barriers to prevent intruders from gaining access to your home.`,
        icon: '/cent.svg',
        buttons: ['Fencing', 'Barrier Gates', 'Electronic Sensors']
      },
      {
        id: 'physical-security',
        title: 'Physical Security',
        description: `Centurion Security Group provides highly trained guards that patrol, monitor activity, 
                    deter Intrusion and respond immediately to any security breaches.`,
        icon: '/cent.svg',
        buttons: ['Guarding', 'Live Patrols']
      },
      {
        id: 'smart-locks',
        title: 'Smart Locks',
        description: `Centurion security solution enables you to control who enters your property with 
                    electronic locks that can be managed remotely or with your smartphone.`,
        icon: '/cent.svg',
        buttons: ['Remote Control', 'Smartphone control']
      },
      {
        id: 'real-time-analytics',
        title: 'Real-Time Analytics',
        description: `The surveillance system uses advanced real-time analytics technology to process 
                    and analyze the data collected by the system's sensors and cameras.`,
        icon: '/cent.svg',
        buttons: ['Real-Time Data Processing', 'Statistical Analysis', 'Predictive Analysis']
      }
    ]
  },
  'health-care': {
    title: 'Health Care',
    description: `With sensitive patient data and valuable medical tools, healthcare facilities need top-notch 
                 security systems to protect both their patients and their resources. Discover how 
                 Centurion is the right security partner for you.`,
    features: [
      {
        id: 'intruder-detection',
        title: 'Intruder Detection',
        description: `The surveillance system incorporates multiple layers of protection 
                    to detect intruders before they enter the construction site. The 
                    system uses advanced motion detection and video analytics 
                    technology to trigger alarms and send alerts to security personnel.
                    
                    The cameras are equipped with night vision and thermal imaging 
                    capabilities to detect intruders in low light and poor weather 
                    conditions.`,
        icon: '/cent.svg',
        buttons: ['High Resolution Cameras', 'Thermal Imaging Cameras', 'Real-Time Monitoring', 'Motion Detection Sensors']
      },
      {
        id: 'access-control',
        title: 'Access Control',
        description: `The surveillance system Centurion provides uses advanced 
                    access control technology to restrict unauthorized access to the 
                    construction site. The system provides secure access to 
                    authorized personnel, while preventing unauthorized access by potential intruders.`,
        icon: '/cent.svg',
        buttons: ['Two-Factor Authentication', 'Biometric Authentication', 'Smart Card Authentication']
      },
      {
        id: 'perimeter-protection',
        title: 'Perimeter Protection',
        description: `The surveillance system uses advanced perimeter protection technology to secure 
                    the area's outer perimeter. The system provides secure fencing and barriers to 
                    prevent intruders from gaining access.`,
        icon: '/cent.svg',
        buttons: ['Electric Fencing', 'Barrier Gates', 'Electronic Sensors']
      },
      {
        id: 'fire-prevention',
        title: 'Fire Prevention',
        description: `The surveillance system includes fire prevention technology to keep the 
                    construction site safe from fires. The system provides early warning and alerts 
                    for potential fires to prevent serious damage.`,
        icon: '/cent.svg',
        buttons: ['Fire Detection', 'Alerts & Notifications', 'Fire Suppression']
      },
      {
        id: 'security-management',
        title: 'Security Information and Event Management',
        description: `A SIEM system collects and analyzes security-related data from different sources to detect and 
                    respond to security threats in real-time. By using a SIEM system, healthcare providers can monitor 
                    their networks for potential security breaches.`,
        icon: '/cent.svg',
        buttons: ['Firewall', 'Real-Time Data Processing']
      },
      {
        id: 'intrusion-detection',
        title: 'Intrusion Detection and Prevention Systems',
        description: `IDPS is a security solution that monitors network traffic for signs of a possible attack. 
                    IDPS can detect and prevent attacks on patient data, helping to keep it secure.`,
        icon: '/cent.svg',
        buttons: ['Monitoring', 'Encryption']
      }
    ]
  },
  retail: {
    title: 'Retail',
    description: `A secure retail environment is critical for the safety of employees, customers, and assets. 
                 This is how Centurion can protect your assets.`,
    features: [
      {
        id: 'intruder-detection',
        title: 'Intruder Detection',
        description: `Intrusion detection systems can be used to detect unauthorized access to the store after hours 
                    and staff-only designated areas. This can include motion sensors, door and window sensors, and 
                    video analytics.`,
        icon: '/cent.svg',
        buttons: ['High Resolution Cameras', 'Real-Time Monitoring', 'Motion Detection Sensors']
      },
      {
        id: 'access-control',
        title: 'Access Control',
        description: `Access control systems restrict access to certain areas of the store or limit who can enter 
                    the store during certain times. This can be done through the use of smart cards, biometric 
                    identification systems, or even facial recognition technology.`,
        icon: '/cent.svg',
        buttons: ['Biometric Authentication', 'Smart Card Authentication', 'Facial Recognition']
      },
      {
        id: 'rfid-inventory',
        title: 'RFID Inventory Management',
        description: `Radio-frequency identification (RFID) technology is a way for retailers to identify 
                    items using radio waves. It transmits data from a RFID tag to a reader, giving you 
                    accurate, real-time tracking data of your inventory.`,
        icon: '/cent.svg',
        buttons: ['RFID Anti-Theft Tag', 'Asset Tracking Data']
      },
      {
        id: 'physical-security',
        title: 'Physical Security',
        description: `Centurion Security Group provides highly trained guards that patrol, monitor activity, 
                    deter theft and respond immediately to any security breaches.`,
        icon: '/cent.svg',
        buttons: ['Live Patrols', 'Guarding']
      },
      {
        id: 'pos-security',
        title: 'Point of Sale Security',
        description: `POS security systems can be used to prevent employee theft and increase customer trust by 
                    requiring authorization for certain transactions or by tracking all transactions and flagging any 
                    suspicious activity.`,
        icon: '/cent.svg',
        buttons: ['End-to-end Encryption', 'Two-Factor Authentication']
      },
      {
        id: 'real-time-analytics',
        title: 'Real-Time Analytics',
        description: `The surveillance system uses advanced real-time analytics technology to process 
                    and analyze the data collected by the system's sensors and cameras.`,
        icon: '/cent.svg',
        buttons: ['Real-Time Data Processing', 'Statistical Analysis', 'Predictive Analysis']
      }
    ]
  },
  'manufacturing-plants': {
    title: 'Manufacturing Plants',
    description: `In today's constantly evolving digital landscape, manufacturing plants are at an increased risk 
                 of unauthorized access, theft, and data breaches. This is how Centurion can protect your assets.`,
    features: [
      {
        id: 'intruder-detection',
        title: 'Intruder Detection',
        description: `The surveillance system incorporates multiple layers of protection 
                    to detect intruders before they enter the manufacturing plant. The 
                    system uses advanced motion detection and video analytics 
                    technology to trigger alarms and send alerts to security personnel.
                    
                    The cameras are equipped with night vision and thermal imaging 
                    capabilities to detect intruders in low light and poor weather 
                    conditions.`,
        icon: '/cent.svg',
        buttons: ['High Resolution Cameras', 'Thermal Imaging Cameras', 'Real-Time Monitoring', 'Motion Detection Sensors']
      },
      {
        id: 'access-control',
        title: 'Access Control',
        description: `The surveillance system Centurion provides uses advanced access control technology to restrict 
                    unauthorized access to the manufacturing plant. The system provides secure access to 
                    authorized personnel and contractors, while preventing unauthorized access by potential intruders.`,
        icon: '/cent.svg',
        buttons: ['Two-Factor Authentication', 'Biometric Authentication', 'Smart Card Authentication']
      },
      {
        id: 'perimeter-protection',
        title: 'Perimeter Protection',
        description: `The surveillance system uses advanced perimeter protection technology to secure the 
                    manufacturing plant's outer perimeter. The system provides secure fencing and barriers 
                    to prevent intruders from gaining access to the manufacturing plant.`,
        icon: '/cent.svg',
        buttons: ['Electric Fencing', 'Barrier Gates', 'Electronic Sensors']
      },
      {
        id: 'fire-prevention',
        title: 'Fire Prevention',
        description: `The surveillance system includes fire prevention technology to keep the 
                    manufacturing plant safe from fires. The system provides early warning and 
                    alerts for potential fires to prevent serious damage.`,
        icon: '/cent.svg',
        buttons: ['Fire Detection', 'Alerts & Notifications', 'Fire Suppression']
      },
      {
        id: 'cyber-security',
        title: 'Cyber Security',
        description: `Protecting manufacturing plants against cyber attacks is critical to ensure the safety and security 
                    of the plant's operations and the integrity of the products being manufactured. Monitoring for suspicious 
                    activity on computer systems and networks is critical to detecting and responding to cyber attacks.`,
        icon: '/cent.svg',
        buttons: ['Monitoring Activity', 'Regular Testing & Assessment']
      },
      {
        id: 'real-time-analytics',
        title: 'Real-Time Analytics',
        description: `The surveillance system uses advanced real-time analytics technology to process 
                    and analyze the data collected by the system's sensors and cameras.`,
        icon: '/cent.svg',
        buttons: ['Real-Time Data Processing', 'Statistical Analysis', 'Predictive Analysis']
      }
    ]
  }
};

export const tempIndustryContent = industryData;