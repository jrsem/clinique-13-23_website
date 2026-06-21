'use client'

import { useState } from 'react'
import Image from 'next/image'

const departments = [
  {
    id: 'cardiology',
    label: 'Cardiology',
    title: 'Cardiology',
    subtitle: 'Comprehensive care for your heart health including diagnosis and treatment.',
    description:
      'Our cardiology department is equipped with state-of-the-art technology to provide the best cardiac care. We focus on prevention, diagnosis, and treatment of heart diseases.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv9BU2X1JdHwDMDKhWc3RUevLHIR2yejpAQOuow4IuNgYbQlGbm_9DaqvsV4INVtj87kvAOEK5ZPbfUV02ONsyYxk0hZtpeKqhJz0ZcQz8bn58X6se9JZsye-ObMm1eGZt9dZ46tWfZBhZ4X_wqrP4jY55c1lOv5rhmwGozcbG2VKzhv51yRwZ7s93T4sJxNbndkta_ErE_FX4PNxhbQr6MCjlvrUB0kRcXiCvWZHWo2cGf6ThUmXocci9B-hbTPKM8gg5meNmDmGc',
    imageAlt: 'Cardiology Department',
  },
  {
    id: 'neurology',
    label: 'Neurology',
    title: 'Neurology',
    subtitle: 'Expert care for disorders of the nervous system.',
    description:
      'Our specialists handle complex neurological conditions with precision and care, utilizing the latest research and clinical protocols.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAD8FFRsx9taFhR0DFnEoQsL80WZIhFrZdyAgh7ebqbWshLrsNhXSlXxbUDjfXoZ9JcWsSHDtyFWbOXWscvYb4qz496E3M9KMY67eeou4muodShVXQTyBQqlzlz0C3Iu6LJngWZ7IgyJ8FWholbV0QwORlIv2-FdSizHfXCMZ_l5dHsXCTFiOYkHiBxQIOfiXE-CACeVg21jrvERbTrnfutaT-kslr_dmvCdIEEaLCcW9ji4vWdUOwZGGG7pzdn6Gyu4SMFvbRR2ZV',
    imageAlt: 'Neurology Department',
  },
  {
    id: 'hepatology',
    label: 'Hepatology',
    title: 'Hepatology',
    subtitle:
      'Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut',
    description:
      'Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyI_KbH-KK3qO4d3yIo6tCkhfiQh1540JpUgHCWKgkTLIJG6PIecYylQQMd9ouVe2mfs5uDKyZbxg5iu26bv8T8Zsaig2U4m64J9MKgFbfB3_7Q9m-weBejN6Znqifyz2Nl5vknQtWdzn7chYsdT0-5SY89E3e_HxiMsle_7FffZPp6h6SAPLW0tJgtQcGknCfm6iOa7Gi3-m9cBTjY6nKfbVbnGps2W0r9WwFQvaDwBpZouLReCsK-L5xx6QTxcbreMezLbDNYUkH',
    imageAlt: 'Hepatology Specialist',
  },
  {
    id: 'pediatrics',
    label: 'Pediatrics',
    title: 'Pediatrics',
    subtitle: 'Dedicated care for infants, children, and adolescents.',
    description:
      'We provide a warm and welcoming environment for our youngest patients, ensuring they grow up healthy and strong.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFhM_fD-UIlJxwx_fMER6Zk8M9tB8Z6-rQzoKeev3p0Z7WIerb4P_3-0Jp2N2W1qKec-MEyzHP3CGDbLj4SvGE3lnOQcXKRV-bFO7Lc05PGobW94-0VDwbsWyjuypA37lSx3_9QuTc0ye8LJ7tggOxaGtD3EnVkQEnNPSdQ1DyhkoDY-eLgFfnLWREYR7lInllEEF9DJVUuZDCBDagbevAMrSRYbN03EiFt7gXOa-TmjF_gi3p8taNh0vfz8rNOXp4ARdMb8d0akaa',
    imageAlt: 'Pediatrics Department',
  },
  {
    id: 'ophthalmologists',
    label: 'Ophthalmologists',
    title: 'Ophthalmologists',
    subtitle: 'Advanced eye care and vision correction services.',
    description:
      'From routine eye exams to complex surgical procedures, our ophthalmology team helps you maintain clear vision.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiZPKriD7h83pWRRdXKCBXLgILkgCmNU8VvV_W1Ld8MYLwirorH2IxmzZJI69brmH2fZQ0RlMYDed1KzgJ_dnMLLQwzfq6ghYe6OP0zZDAGuFIjiejCusC_uR2Pek4JborlLYLf1_-Fp4UlqWboX8hAOb88A_sW7Pk',
    imageAlt: 'Ophthalmology Department',
  },
]

export default function DepartmentsSection() {
  const [activeId, setActiveId] = useState('hepatology')

  const activeDept = departments.find((d) => d.id === activeId)!

  return (
    <section className="py-16 md:py-24" id="departments">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Section Header */}
        {/* <!-- Section Heading --> */}
                <div className="mb-16">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="h-[2px] w-12 bg-clinique_rose"></div>
                        <span className="text-clinique_rose font-semibold tracking-wide uppercase text-sm">Departements</span>
                    </div>
                    <h2 className="text-4xl font-bold text-clinique_bleue">Visiter Nos Departements</h2>
                </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Sidebar Navigation */}
          <nav className="w-full lg:w-1/4 border-r border-gray-100">
            <ul className="flex flex-col space-y-0">
              {departments.map((dept) => (
                <li key={dept.id}>
                  <button
                    onClick={() => setActiveId(dept.id)}
                    className={`w-full text-left py-4 px-6 font-semibold transition-colors duration-300 hover:text-clinique_green ${
                      activeId === dept.id
                        ? 'text-clinique_rose border-r-[3px] border-clinique_rose'
                        : 'text-[#2c4964]'
                    }`}
                  >
                    {dept.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content Area */}
          <div className="w-full lg:w-3/4">
            <article key={activeId} className="animate-fadeIn">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2c4964] mb-4">
                    {activeDept.title}
                  </h3>
                  <p className="italic text-[#777777] mb-4 leading-relaxed">
                    {activeDept.subtitle}
                  </p>
                  <p className="text-[#777777] leading-relaxed">
                    {activeDept.description}
                  </p>
                </div>
                <div className="md:w-1/3 flex items-center">
                  <Image
                    src={activeDept.image}
                    alt={activeDept.imageAlt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-sm shadow-md"
                  />
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}
