import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title:
      "Hệ thống Quản lý Bệnh viện Thông minh tích hợp AI hỗ trợ Chẩn đoán và Tóm tắt Hồ sơ Y tế",
    description:
      "Dự án phát triển Hệ thống Thông tin và Quản lý Bệnh viện toàn diện, số hóa quy trình vận hành trên nền tảng Supabase (PostgreSQL) và Next.js. Được tích hợp AI để hỗ trợ giải trình, tóm tắt hồ sơ y tế và phối hợp chẩn đoán, nâng cao hiệu quả và độ chính xác trong quản lý và điều trị.",
    image: "/about-binh/projects/project4.png",
    tags: ["PostgreSQL", "React", "NextJS"],
    demoUrl: "",
    githubUrl: "https://github.com/AkasameVN26/cmec-hms-web-app",
  },
  {
    id: 2,
    title: "Website hỗ trợ cá nhân hoá học tập dựa trên AI",
    description:
      "Nền tảng này được thiết kế nhằm nâng cao chất lượng và hiệu quả giáo dục thông qua việc tự động hóa quy trình tạo đề thi, bài tập, đồng thời cá nhân hóa trải nghiệm học tập cho học sinh bằng các gợi ý và phân tích chuyên sâu dựa trên AI. Hệ thống giúp giáo viên dễ dàng quản lý lớp học và theo dõi tiến độ học tập của từng cá nhân, góp phần tối ưu hóa công tác giảng dạy trong kỷ nguyên số.",
    image: "/about-binh/projects/project1.png",
    tags: ["Angular", ".NET", "MongoDB"],
    demoUrl:
      "https://drive.google.com/drive/folders/163Ht97sw9-aLWYJaNji7lrHm0U07hSyE?usp=drive_link",
    githubUrl: "",
  },

  {
    id: 3,
    title: "ML AIMBOT VALORANT",
    description:
      "Một aimbot tân tiến áp dụng học máy có độ chính xác và tốc độ phản hồi cực cao nhờ áp dụng kĩ thuật học máy để tìm ra dải màu tối ưu trong thời gian thực",
    image: "/about-binh/projects/project2.mp4",
    tags: ["OpenCV", "NumPy", "Hacking"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Touhou: Goblin Invasion",
    description:
      "Một dự án Game được truyền cảm hứng bối cảnh cùng dàn nhân vật từ series game vô cùng nổi tiếng Touhou Project, kết hợp cùng gameplay Shoot em up độc đáo.",
    image: "/about-binh/projects/project3.png",
    tags: ["Unity"],
    demoUrl: "https://daindadev.itch.io/touhou-goblins-invasion",
    githubUrl: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Những Dự Án
          <span className="text-primary"> Nổi Bật </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Xin giới thiệu một số dự án tâm huyết của minh. Mỗi sản phẩm là thành
          quả của quá trình trau chuốt cẩn thận, đặt trọng tâm vào từng chi
          tiết, hiệu suất hoạt động và trải nghiệm mang lại cho người dùng.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                {project.image.endsWith(".mp4") ? (
                  <video
                    src={project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : (
                      <span className="text-muted-foreground opacity-50 cursor-not-allowed">
                        <ExternalLink size={20} />
                      </span>
                    )}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    ) : (
                      <span className="text-muted-foreground opacity-50 cursor-not-allowed">
                        <Github size={20} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href=""
          >
            Ghé qua Github của mình nhé! <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
