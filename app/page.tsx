export default function Home() {
  return (
    <main className="flex flex-col flex-1 bg-[#ECEEF0] text-[#202020] font-sans">
      {/* Nav */}
      <header className="w-full border-b border-[#DEE0E2]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-xl font-semibold tracking-tight">Mosaic</div>
          <nav className="hidden gap-8 text-sm text-[#202020]/70 md:flex">
            <a href="#features" className="hover:text-[#202020]">기능</a>
            <a href="#how" className="hover:text-[#202020]">사용 방법</a>
            <a href="#pricing" className="hover:text-[#202020]">요금</a>
          </nav>
          <a
            href="#cta"
            className="rounded-full bg-[#202020] px-5 py-2 text-sm font-medium text-[#ECEEF0] transition hover:opacity-90"
          >
            시작하기
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
          <span className="mb-6 inline-block rounded-full border border-[#DEE0E2] bg-[#DEE0E2] px-4 py-1.5 text-xs font-medium text-[#202020]">
            AI Viral Video Generator
          </span>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            원클릭으로 바이럴 영상을<br />
            지금 바로 만드세요
          </h1>
          <p className="mt-6 max-w-xl text-base text-[#202020]/70 md:text-lg">
            아이디어만 입력하면, AI가 트렌드에 맞는 숏폼 영상을
            자동으로 만들어 드립니다. 편집도, 자막도, 음악도 한 번에.
          </p>

          <div id="cta" className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-[#202020] px-8 py-3.5 text-sm font-medium text-[#ECEEF0] transition hover:opacity-90"
            >
              무료로 영상 만들기
            </a>
            <a
              href="#how"
              className="rounded-full border border-[#202020]/15 bg-[#DEE0E2] px-8 py-3.5 text-sm font-medium text-[#202020] transition hover:bg-[#DEE0E2]/70"
            >
              데모 보기
            </a>
          </div>

          <p className="mt-6 text-xs text-[#202020]/50">
            카드 등록 없이 시작 · 첫 3개 영상 무료
          </p>

          {/* Mock preview */}
          <div className="mt-16 w-full max-w-4xl rounded-3xl border border-[#DEE0E2] bg-[#DEE0E2] p-3 shadow-sm">
            <div className="flex aspect-[16/9] w-full items-center justify-center rounded-2xl bg-[#ECEEF0]">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#202020]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-1"
                  >
                    <path
                      d="M8 5v14l11-7z"
                      fill="#ECEEF0"
                    />
                  </svg>
                </div>
                <span className="text-sm text-[#202020]/60">미리보기</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-[#DEE0E2]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              영상 제작의 모든 단계를<br />AI가 대신합니다
            </h2>
            <p className="mt-4 text-[#202020]/70">
              스크립트 작성부터 편집, 자막, 음악, 썸네일까지.
              복잡한 작업을 한 번의 클릭으로 끝내세요.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "트렌드 기반 스크립트",
                desc: "지금 뜨고 있는 주제를 분석해 바이럴 가능성이 높은 스크립트를 자동 생성합니다.",
              },
              {
                title: "자동 편집 & 자막",
                desc: "컷 편집, 자막, 효과음을 AI가 알아서. 영상 편집 경험이 없어도 완성도 높은 결과물.",
              },
              {
                title: "플랫폼별 최적화",
                desc: "YouTube Shorts, Instagram Reels, TikTok에 맞춰 비율과 길이를 자동 조정합니다.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#DEE0E2] bg-[#DEE0E2] p-8 transition hover:bg-[#DEE0E2]/70"
              >
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#202020]/70">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-[#DEE0E2] bg-[#DEE0E2]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              3단계로 끝나는 영상 제작
            </h2>
            <p className="mt-4 text-[#202020]/70">
              아이디어만 있다면, 나머지는 Mosaic에 맡기세요.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { step: "01", title: "주제 입력", desc: "만들고 싶은 영상의 주제나 키워드를 입력하세요." },
              { step: "02", title: "AI가 제작", desc: "스크립트, 영상, 자막, 음악까지 자동으로 생성됩니다." },
              { step: "03", title: "다운로드 & 업로드", desc: "완성된 영상을 다운로드하거나 바로 게시할 수 있습니다." },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl bg-[#ECEEF0] p-8"
              >
                <div className="text-xs font-medium tracking-wider text-[#202020]/50">
                  STEP {s.step}
                </div>
                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#202020]/70">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="pricing" className="border-t border-[#DEE0E2]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            첫 바이럴 영상,<br />오늘 만들어보세요
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[#202020]/70">
            가입 즉시 3개의 영상을 무료로 제작할 수 있습니다.
            신용카드 등록도 필요 없습니다.
          </p>
          <a
            href="#"
            className="mt-10 inline-block rounded-full bg-[#202020] px-10 py-4 text-sm font-medium text-[#ECEEF0] transition hover:opacity-90"
          >
            무료로 시작하기
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#DEE0E2]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-[#202020]/60 md:flex-row">
          <div>© 2026 Mosaic</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#202020]">이용약관</a>
            <a href="#" className="hover:text-[#202020]">개인정보처리방침</a>
            <a href="#" className="hover:text-[#202020]">문의</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
