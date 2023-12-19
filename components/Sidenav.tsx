type NavItem = {
  title: any;
  link: any;
};

type SidenavProps = {
  slug: any;
  name:any
};

const Sidenav = ({ slug, name }:SidenavProps) => {
  const navItems: NavItem[] = [
    { title: 'Bio', link: `/artists/${slug.current}` },
    { title: 'Gallery', link: `/artists/${slug.current}/gallery` },
    { title: 'Review', link: `/artists/${slug.current}/review` },
    { title: 'Statement', link: `/artists/${slug.current}/statement` },
  ];
 console.log('sidenva',slug.current)
  return (
    <div>
      <div className="sticky top-0 h-screen w-full bg-gray100 p-10   z-100 overflow-hidden">
  <h2 className="text-3xl mb-10 border-b border-b-white pb-10 ">{name}</h2>
        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <li key={index} className="py-2 border-b border-b-white text-xl">
              <a className=" " href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;