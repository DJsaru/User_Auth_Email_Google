const data = [
      {
        "id": 1,
        "name": "Dr. John Smith",
        "category": "Cardiology",
        "experience": "15 years",
        "description": "Dr. John Smith is a renowned cardiologist with expertise in treating heart diseases. He has been practicing for 15 years and is dedicated to providing the best care to his patients.",
        "images": "https://img.freepik.com/free-photo/covid-coronavirus-outbreak-healthcare-workers-pandemic-concept-enthusiastic-smiling-doctor-physi_1258-84624.jpg?w=1800&t=st=1686485820~exp=1686486420~hmac=a24fcfe5c8ae8ded1be6bee48f6a298965a7c7d69d679c550108ceb43f72f5dd"
      },
      {
        "id": 2,
        "name": "Dr. Sarah Johnson",
        "category": "Cardiology",
        "experience": "12 years",
        "description": "Dr. Sarah Johnson is a compassionate cardiologist who specializes in the diagnosis and treatment of heart conditions. With 12 years of experience, she is committed to improving the cardiac health of her patients.",
        "images": "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg?w=1380&t=st=1686339781~exp=1686340381~hmac=7baf0d82c133808c8e1c8871fae19fbfa78414bfb39d0090a918aaccb8fb4c3e"
      },
      {
        "id": 3,
        "name": "Dr. Robert Anderson",
        "category": "Cardiology",
        "experience": "18 years",
        "description": "Dr. Robert Anderson is a skilled cardiologist with extensive experience in managing complex heart conditions. With 18 years of practice, he strives to provide personalized care and innovative treatment options.",
        "images": "https://img.freepik.com/free-photo/healthcare-workers-medicine-covid-19-pandemic-self-quarantine-concept-smiling-attractive-doctor-scrubs-glasses-stethoscope-neck-cross-arms-chest-ready-help-patients_1258-58772.jpg?w=2000&t=st=1686485342~exp=1686485942~hmac=6bfc36a4a4a440dd4c331c6230f3d90cc26f9327ea63be90ed486354690fa753"
      },
      {
        "id": 4,
        "name": "Dr. John Smith",
        "category": "Cardiology",
        "experience": "15 years",
        "description": "Dr. John Smith is a renowned cardiologist with expertise in treating heart diseases. He has been practicing for 15 years and is dedicated to providing the best care to his patients.",
        "images": "https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg?w=1800&t=st=1686485381~exp=1686485981~hmac=2975252e599209ac5676c1ad1c7e881103016ae2c4c545bdd85eda30db83505d"
      },
      {
        "id": 5,
        "name": "Dr. Emily Johnson",
        "category": "Dermatology",
        "experience": "10 years",
        "description": "Dr. Emily Johnson is a skilled dermatologist specializing in the diagnosis and treatment of skin conditions. With 10 years of experience, she aims to help patients achieve healthy and radiant skin.",
        "images": "https://img.freepik.com/free-photo/expressive-senior-woman-posing_344912-981.jpg?w=2000&t=st=1686485462~exp=1686486062~hmac=338ed5f8c04a607e8028744d9dd1430661ed626c409c91fe1c2636240841ec33"
      },
      {
        "id": 6,
        "name": "Dr. Michael Brown",
        "category": "Orthopedics",
        "experience": "20 years",
        "description": "Dr. Michael Brown is an orthopedic surgeon who specializes in the treatment of musculoskeletal disorders and injuries. With 20 years of experience, he is committed to restoring mobility and improving the quality of life for his patients.",
        "images": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=2000&t=st=1686485659~exp=1686486259~hmac=6352f552c0ed92cb95b875239d60a8b65b243a99ef8fe8e8af0c883e49ecf5fe"
      },
      {
        "id": 7,
        "name": "Dr. Emily Adams",
        "category": "Neurology",
        "experience": "10 years",
        "description": "Dr. Emily Adams is a skilled neurologist specializing in the diagnosis and treatment of neurological disorders. With 10 years of experience, she is dedicated to providing comprehensive care and improving the lives of her patients.",
        "images": "https://img.freepik.com/premium-photo/young-asian-female-doctor-grey_296537-1123.jpg?w=2000"
      },
      {
        "id": 8,
        "name": "Dr. Michael Harris",
        "category": "Neurology",
        "experience": "8 years",
        "description": "Dr. Michael Harris is a compassionate neurologist who focuses on understanding and treating complex neurological conditions. With 8 years of experience, he strives to deliver personalized care to his patients.",
        "images": "https://img.freepik.com/free-photo/healthcare-workers-medicine-covid-19-pandemic-self-quarantine-concept-smiling-attractive-doctor-scrubs-glasses-stethoscope-neck-cross-arms-chest-ready-help-patients_1258-58772.jpg?w=2000&t=st=1686485342~exp=1686485942~hmac=6bfc36a4a4a440dd4c331c6230f3d90cc26f9327ea63be90ed486354690fa753"
      },
      {
        "id": 9,
        "name": "Dr. Sophia Lee",
        "category": "Neurology",
        "experience": "15 years",
        "description": "Dr. Sophia Lee is an experienced neurologist with expertise in the diagnosis and management of various neurological disorders. With 15 years of practice, she is committed to improving the neurological well-being of her patients.",
        "images": "https://img.freepik.com/premium-photo/young-asian-female-doctor-grey_296537-1123.jpg?w=2000"
      },
      {
        "id": 10,
        "name": "Dr. Sarah Johnson",
        "category": "Gynecology",
        "experience": "12 years",
        "description": "Dr. Sarah Johnson is a compassionate gynecologist specializing in women's reproductive health. With 12 years of experience, she is dedicated to providing comprehensive care and supporting women in all stages of their lives.",
        "images": "https://img.freepik.com/premium-photo/_590464-5007.jpg?w=1800"
      },
      {
        "id": 11,
        "name": "Dr. Jessica Roberts",
        "category": "Gynecology",
        "experience": "9 years",
        "description": "Dr. Jessica Roberts is a skilled gynecologist who focuses on delivering personalized care to women. With 9 years of experience, she is committed to promoting women's health and providing comprehensive gynecological services.",
        "images": "https://img.freepik.com/premium-photo/portrait-smiling-beautiful-female-doctor-white-coat_8119-2657.jpg?w=1800"
      },
      {
        "id": 12,
        "name": "Dr. Emily Davis",
        "category": "Gynecology",
        "experience": "15 years",
        "description": "Dr. Emily Davis is an experienced gynecologist specializing in obstetrics and gynecological care. With 15 years of practice, she is dedicated to providing high-quality, personalized care to women and ensuring their well-being.",
        "images": "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000&t=st=1686485200~exp=1686485800~hmac=cf2b664f44f92b61e40e2eddd6cbe64b0505dcbb4acba4cdb824fdedc4549c3e"
      },
      {
        "id": 13,
        "name": "Dr. Emily Adams",
        "category": "Dermatology",
        "experience": "10 years",
        "description": "Dr. Emily Adams is a skilled dermatologist specializing in the diagnosis and treatment of skin conditions. With 10 years of experience, she aims to help patients achieve healthy and radiant skin.",
        "images": "https://img.freepik.com/premium-photo/_590464-5007.jpg?w=1800"
      },
      {
        "id": 14,
        "name": "Dr. Michael Harris",
        "category": "Dermatology",
        "experience": "8 years",
        "description": "Dr. Michael Harris is a dedicated dermatologist who focuses on providing comprehensive care for skin disorders. With 8 years of experience, he is committed to improving the skin health of his patients.",
        "images": "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000&t=st=1686485200~exp=1686485800~hmac=cf2b664f44f92b61e40e2eddd6cbe64b0505dcbb4acba4cdb824fdedc4549c3e"
      },
      {
        "id": 15,
        "name": "Dr. Michael Brown",
        "category": "Orthopedics",
        "experience": "20 years",
        "description": "Dr. Michael Brown is an orthopedic surgeon who specializes in the treatment of musculoskeletal disorders and injuries. With 20 years of experience, he is committed to restoring mobility and improving the quality of life for his patients.",
        "images": "https://img.freepik.com/free-photo/healthcare-workers-medicine-covid-19-pandemic-self-quarantine-concept-smiling-attractive-doctor-scrubs-glasses-stethoscope-neck-cross-arms-chest-ready-help-patients_1258-58772.jpg?w=2000&t=st=1686485342~exp=1686485942~hmac=6bfc36a4a4a440dd4c331c6230f3d90cc26f9327ea63be90ed486354690fa753"
      },
      {
        "id": 16,
        "name": "Dr. Elizabeth Roberts",
        "category": "Orthopedics",
        "experience": "12 years",
        "description": "Dr. Elizabeth Roberts is a skilled orthopedic surgeon focusing on the treatment of bone and joint conditions. With 12 years of experience, she is dedicated to providing comprehensive orthopedic care and helping patients regain their mobility.",
        "images": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=2000&t=st=1686485659~exp=1686486259~hmac=6352f552c0ed92cb95b875239d60a8b65b243a99ef8fe8e8af0c883e49ecf5fe"
      }
      
    ]

    export default data;